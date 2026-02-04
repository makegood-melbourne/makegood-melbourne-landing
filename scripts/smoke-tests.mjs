#!/usr/bin/env node

/**
 * Post-deploy smoke tests for critical messaging functionality.
 * This script runs after every Netlify deploy to verify:
 * 1. Contact form endpoint is reachable
 * 2. Chatbot endpoint is reachable
 *
 * Exit code 0 = success, 1 = failure (will fail the deploy)
 */

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "https://krgbykvrigbbkvyprqnb.supabase.co";
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtyZ2J5a3ZyaWdiYmt2eXBycW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyMzk1NjYsImV4cCI6MjA4NDgxNTU2Nn0.8aCUrnJnMUVJ-BES78V13uZu671oQo6rNvu3ZrRV8vs";

const CONTACT_ENDPOINT = `${SUPABASE_URL}/functions/v1/send-contact-email`;
const CHAT_ENDPOINT = `${SUPABASE_URL}/functions/v1/chat`;

const TIMEOUT_MS = 10000;

async function testEndpoint(name, url, options = {}) {
  console.log(`\n🔍 Testing ${name}...`);
  console.log(`   URL: ${url}`);

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        ...options.headers,
      },
    });

    clearTimeout(timeoutId);

    // For smoke tests, we just need to verify the endpoint is reachable
    // 400 errors are acceptable (validation errors mean the endpoint works)
    // 401/403 means auth is working
    // 5xx errors indicate a real problem
    const status = response.status;

    if (status >= 500) {
      console.log(`   ❌ FAILED: Server error (${status})`);
      return false;
    }

    console.log(`   ✅ PASSED: Endpoint reachable (${status})`);
    return true;
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === "AbortError") {
      console.log(`   ❌ FAILED: Request timed out after ${TIMEOUT_MS}ms`);
    } else {
      console.log(`   ❌ FAILED: ${error.message}`);
    }
    return false;
  }
}

async function runSmokeTests() {
  // Check if this is a preview deploy (non-blocking) or production deploy (blocking)
  const isPreviewDeploy = process.env.CONTEXT === 'deploy-preview' || process.env.BRANCH !== 'main';
  
  console.log("═══════════════════════════════════════════════════════════");
  console.log("  MAKE GOOD MELBOURNE - POST-DEPLOY SMOKE TESTS");
  console.log("═══════════════════════════════════════════════════════════");
  console.log(`  Supabase URL: ${SUPABASE_URL}`);
  console.log(`  Timestamp: ${new Date().toISOString()}`);
  console.log(`  Deploy context: ${isPreviewDeploy ? 'PREVIEW (non-blocking)' : 'PRODUCTION (blocking)'}`);

  const results = [];

  // Test 1: Contact form endpoint (send empty body to trigger validation, not actual email)
  results.push(
    await testEndpoint("Contact Form Endpoint", CONTACT_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        name: "__SMOKE_TEST__",
        email: "smoke@test.invalid",
        message: "This is a smoke test - do not process",
        phone: "0000000000",
        sourcePage: "/smoke-test",
      }),
    })
  );

  // Test 2: Chatbot endpoint (send minimal message)
  results.push(
    await testEndpoint("Chatbot Endpoint", CHAT_ENDPOINT, {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: "__SMOKE_TEST__" }],
      }),
    })
  );

  console.log("\n═══════════════════════════════════════════════════════════");

  const passed = results.every((r) => r);
  const passedCount = results.filter((r) => r).length;

  if (passed) {
    console.log(`  ✅ ALL TESTS PASSED (${passedCount}/${results.length})`);
    console.log("═══════════════════════════════════════════════════════════\n");
    process.exit(0);
  } else {
    console.log(`  ❌ TESTS FAILED (${passedCount}/${results.length} passed)`);
    console.log("═══════════════════════════════════════════════════════════\n");
    console.log("  ⚠️  Critical messaging functionality may be broken!");
    console.log("  ⚠️  Check edge function logs for details.\n");
    
    // For preview deploys, don't fail the build - just warn
    if (isPreviewDeploy) {
      console.log("  ℹ️  Preview deploy - continuing despite test failures.\n");
      process.exit(0);
    } else {
      process.exit(1);
    }
  }
}

runSmokeTests().catch((err) => {
  console.error("Smoke test runner crashed:", err);
  process.exit(1);
});

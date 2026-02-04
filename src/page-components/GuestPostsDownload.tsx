import { Helmet } from "@/lib/helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const GuestPostsDownload = () => {
  const canonicalUrl = "https://makegood.melbourne/downloads/guest-posts";

  return (
    <>
      <Helmet>
        <title>Guest Post Download | Make Good Melbourne</title>
        <meta
          name="description"
          content="Download ready-to-submit guest post articles from Make Good Melbourne."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Guest Post Download | Make Good Melbourne" />
        <meta
          property="og:description"
          content="Download ready-to-submit guest post articles from Make Good Melbourne."
        />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <header>
          <Navigation />
        </header>

        <main className="mx-auto w-full max-w-3xl px-6 py-16">
          <Card className="p-8">
            <h1 className="text-3xl font-semibold tracking-tight">
              Download guest post document
            </h1>
            <p className="mt-4 text-xl text-muted-foreground">
              Use the button below to download the guest post document. If your
              browser opens a new tab instead of downloading, right-click and
              choose "Save link as".
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="/guest-posts-for-submission.txt" download>
                  Download guest posts
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/blog">Back to blog</a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Need help submitting? Email us at{" "}
              <a
                className="underline underline-offset-4"
                href="mailto:info@makegood.melbourne"
              >
                info@makegood.melbourne
              </a>
              .
            </p>
          </Card>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GuestPostsDownload;

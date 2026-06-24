from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
PARENT = DIST / "services/make-good-solutions/index.html"
CHILDREN = [
    DIST / "services/make-good-solutions/end-of-lease-make-good/index.html",
    DIST / "services/make-good-solutions/office-make-good/index.html",
]
TARGET_URLS = [
    "/services/make-good-solutions/end-of-lease-make-good/",
    "/services/make-good-solutions/office-make-good/",
]
EXPECTED_PARENT_TERMS = [
    "MAKE GOOD SOLUTIONS MELBOURNE",
    "PROPERTY TYPES WE",
    "SCOPE",
    "MAKE GOOD",
    "Office",
    "Warehouse",
    "Retail",
    "OUR MAKE GOOD PROCESS",
    "OUR MAKE GOOD SERVICES",
]


def assert_true(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def main() -> None:
    assert_true(PARENT.exists(), "Make Good parent page was not generated")
    html = PARENT.read_text()

    for term in EXPECTED_PARENT_TERMS:
        assert_true(term in html, f"Expected parent content missing: {term}")

    for child in CHILDREN:
        assert_true(not child.exists(), f"Redundant child page still generated: {child.relative_to(DIST)}")

    source_files = [
        ROOT / "src/components/Navigation.tsx",
        ROOT / "src/components/ServicesGrid.astro",
        ROOT / "src/pages/services/index.astro",
        ROOT / "src/data/sectionLanding.ts",
    ]
    for path in source_files:
        text = path.read_text()
        for target in TARGET_URLS:
            assert_true(target not in text, f"Hard-coded internal link remains in {path.relative_to(ROOT)}: {target}")

    netlify = (ROOT / "netlify.toml").read_text()
    for target in TARGET_URLS:
        assert_true(f'from = "{target}"' in netlify, f"Redirect missing for {target}")
        redirect_pattern = re.compile(rf'from = "{re.escape(target)}"\n\s*to = "/services/make-good-solutions/"\n\s*status = 301', re.MULTILINE)
        assert_true(bool(redirect_pattern.search(netlify)), f"Redirect for {target} is not a 301 to the parent")

    services = (ROOT / "src/data/services.ts").read_text()
    for slug in ["make-good-solutions/end-of-lease-make-good", "make-good-solutions/office-make-good"]:
        idx = services.index(f'slug: "{slug}"')
        next_idx = services.find('\n  {\n', idx + 1)
        chunk = services[idx: next_idx if next_idx != -1 else len(services)]
        assert_true("published: false" in chunk, f"Service not unpublished: {slug}")

    print("Make Good consolidation validation passed")


if __name__ == "__main__":
    main()

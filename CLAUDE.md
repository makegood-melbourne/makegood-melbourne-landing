# Repository Rules

- Never commit or push directly to main.
- - Always create a new branch and open a pull request for any change. Pushing the branch is not enough on its own, always follow through and click "Create pull request" to actually open it. A pushed branch with no open PR is an incomplete task, not a finished one.
  - - Wait for explicit approval in the pull request before it can be merged.
    - - Before editing an existing blog post, check that the post actually exists on the main branch first. If a fix references a post that was only added in a still-open, unmerged pull request, that post will not be visible from a fresh branch cut from main. In that case, stop and tell the user the referenced PR needs to be merged first, rather than guessing or recreating the post from scratch.
      - - Blog posts use exactly one image (the hero, which also serves as the body image). Never add a second mid-body image slot.
        - 

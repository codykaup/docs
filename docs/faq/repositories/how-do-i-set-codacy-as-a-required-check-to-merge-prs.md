# How do I set Codacy as a required check to merge pull requests?

Codacy checks each pull request using your [quality settings](../../repositories/quality-settings.md) and sends a notification to the Git provider informing if the pull request is up to standards or not.

Each Git provider has different options to set up notifications or block merging pull requests until they pass the Codacy check:

## GitHub {: id="github"}

GitHub allows [setting a status check as mandatory](https://docs.github.com/en/free-pro-team@latest/github/administering-a-repository/enabling-required-status-checks){: target="_blank"} before merging pull requests.

!!! important
    Make sure that you [enable the option Pull Request Status](../../repositories-configure/integrations/github-integration.md) on the GitHub integration.

## GitLab {: id="gitlab"}

GitLab allows [flagging merge requests as "Draft"](https://docs.gitlab.com/ee/user/project/merge_requests/work_in_progress_merge_requests.html){: target="_blank"} to block merging them.

## Bitbucket {: id="bitbucket"}

Bitbucket allows [setting a minimum number of merge checks that must pass](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/){: target="_blank"} before merging pull requests.

!!! important
    Make sure that you [enable the option Pull Request Status](../../repositories-configure/integrations/bitbucket-integration.md) on the Bitbucket integration.
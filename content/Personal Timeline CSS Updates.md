---
dg-publish: true
dg-stage: Sapling
---

The original [Obsidian Timeline](https://github.com/Darakah/obsidian-timelines) plugin that I downloaded hadn't been updated in 3 years. The CSS was broken and it wasn't working as intended, stacking the entries together. 

I am no developer, but I was able to use GPT to help investigate the code and determine what was broken and learn how to make the fix. 

For anyone that's a programmer or used to coding, it wasn't a big deal, but for me, it was an evening well spent and I had a good time working through it. 

I should go ahead and make a pull request to update the project with the changes. 

###### *CSS Updates*
*.timeline-container::after*
* right: -18px
*.timeline-right::after*
* left: -14px
*.timeline*
* height: auto

###### How to go about updating GitHub:
1. **Fork the Repository**: If you haven't already, fork the original plugin's repository on [[GitHub]] to your account.
2. **Clone the Fork**: Clone your fork to your local machine using `git clone`.
3. **Make Your Changes**: Apply the fixes you've made to the CSS in the cloned project on your local machine. If there are any other files you've changed as part of the fix, update those too.
4. **Test the Changes**: Before pushing the changes, make sure to test the plugin with your updates. You can do this by copying your updated plugin into your `.obsidian/plugins` directory of a vault.
5. **Commit the Changes**: Once you've confirmed that your fixes work, commit the changes to your fork with appropriate commit messages using `git commit`.
6. **Push the Changes**: Push the commit to your GitHub fork using `git push`.
7. **Create a Pull Request**: On GitHub, create a pull request from your fork to the original repository. Include a detailed description of the changes and why they are needed.
8. **Update `manifest.json`**: It's important to update the `manifest.json` file in the plugin repository to increment the version number. This way, when users check for updates in Obsidian, it will notify them that a new version is available. Follow semantic versioning as a best practice.
9. **Wait for Merge**: If the original maintainer is active, they will review your pull request and, if they agree with the changes, merge it into the original plugin.
10. **Release**: After your changes are merged, the maintainer will typically create a new release. If the maintainer is no longer active, users can still download the updated plugin directly from your GitHub fork.


# language-reason package

If you're seeing this, **don't hit the install button**! This is a dummy placeholder plugin. The only thing you need to install to get Reason support is [atom-reason-loader](https://atom.io/packages/atom-reason-loader).

Because the Reason syntax is versioned (therefore allowing you to upgrade/downgrade your syntax), it's possible that your editor plugins (atom-reason and language-reason) go out of sync with respect to the version of Reason you have locally. To prevent that from happening, atom-reason-loader automatically checks for versions mismatch, warns you, and (optionally) fetches the right plugins versions from [inside Reason](https://github.com/facebook/Reason/tree/master/editorSupport) so that you don't have to manually sync atom-reason and language-reason with whatever Reason version you're currently working with.

With Reason, many people with different Reason versions can work on the same project, using their own version of the plugins, and the checked in AST still works for everyone =).

Config Manager Shared Utils
================

This repository is only used as a package repository for the shared utilities from [config-manager](https://bitbucket.mercatus.com/projects/MCT/repos/config-manager/browse/app/src/shared/utils).

You will only find this README file here, switch to tags above for the available package version that can be included into project.

## Usage

Within the dependencies section of `package.json` inside your project, add the following line:
```
"@config-manager/utils": "git+https://github.com/webintmercatus/shared-utils.git#v1.0.0",
```
**Note:** remember to replace the tag version, i.e. `v1.0.0` from the example above to the desired tag you wish to include inside your project.

## Publishing

We've been utilizing `publish-to-git` for publishing tags to the github repo. 

However, you might see the following error when running `yarn publish-dist`:

```
Command failed: git tag -f v0.2.2 tmp-74976VUlRcABx83aC/master
fatal: Failed to resolve 'tmp-74976VUlRcABx83aC/master' as a valid ref.
```

If you are having some trouble publishing, one workaround is to copy the updated `package.json` and `dist` folder to this repo and run the following:
```
git commit -m [TAG_NAME]
git tag [TAG_NAME]
git push origin [TAG_NAME]
```

`[TAG_NAME]` would have a value like `v0.2.3` for example.
# DipDup contribution guide

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## General

- All code in this repository MUST be licensed under the [MIT License](./LICENSE.md).
- Python code in this repository MUST run on Python 3.10. It also SHOULD run on Python 3.11. Using modern language features is encouraged.
- Python code in this repository MUST run in Linux, macOS, Docker, and `amd64`/`arm64` environments. Windows SHOULD be supported as well.
- We use the [Poetry](https://python-poetry.org/docs/#installation) package manager and GNU Make to set up the development environment. You SHOULD install both tools and run `make help` to see available shortcuts.
- Developers SHOULD have fun while contributing to the project.

## GitHub

- Branch names MUST follow `prefix/short-description` format. Prefixes currently in use: `feat` for features, `fix` for bugfixes, `docs` for documentation, `aux` for miscellaneous, `exp` for experiments.
- Commits in pull requests MUST be squashed when merging to `master`.
- Issues and pull requests MUST have a descriptive title; they SHOULD be linked to each other, appropriately labeled, and assigned to maintainers while in progress.

## Codestyle

- We use the following combo of linters and formatters: `isort`, `black`, `flake8`, `mypy`. All linter checks MUST pass before merging code to `master` (CI will fail otherwise).
- Single quotes are RECOMMENDED for string literals.
- Meaningful comments are highly RECOMMENDED to begin with `# NOTE:`, `# TODO:`, or `# FIXME:`.
- f-string formatting is RECOMMENDED over other methods. Logging is an exception to this rule.

## Releases

- Release versions MUST conform to [Semantic Versioning](https://semver.org/). Releases that introduce breaking changes MUST be major ones.
- Only the latest major version is supported in general. Critical fixes MAY be backported to the previous major release. To do so, create an `aux/X.Y.Z` branch from the latest stable tag, bump the DipDup version manually, and add a new tag.

## Changelog

- All changes that affect user (developer) experience MUST be documented in the CHANGELOG.md file.
- Changes that significantly affect DipDup maintainers' experience MAY be documented in the CHANGELOG.md file.
- The changelog MUST conform to the "Keep a Changelog" specification (CI will break otherwise).
- Lines describing changes MUST be sorted and begin with DipDup module name (`index: Added ...`).

## Documentation

- A page in Release Notes SHOULD accompany all major releases.
- All internal links MUST be created with `{{ #summary ...` shortcodes.
- All values used in project templates MUST be replaced with `{{ #cookiecutter ...` shortcodes.

## Security

- GitHub alerts about dependencies that contain vulnerabilities MUST be investigated and resolved as soon as possible.

## Privacy

- Crash reporting MUST be opt-in (disabled by default) both in config and project templates.
- Sentry events and crash reports MUST NOT contain any sensitive information (IP addresses, hostnames, etc.)
- DipDup SHOULD NOT perform network requests to APIs not defined in config as datasources. Current exceptions: GitHub.

## Docker images

- DipDup dockerfiles use autogenerated `requirements.txt` files. Maintainers SHOULD run `make update` script on every change in dependencies.
- Docker images for stable releases MUST be published on Docker Hub. They MAY also be published on GHCR.
- Maintainers MAY publish arbitrary images on GHCR and remove them when not needed.

## Installer

- Installer module MUST depend on Python stdlib only.

## Scaffolding

- Project templates SHOULD cover all index types available in DipDup.
- They also MAY contain additional features and integrations.

## Demo projects

- Demos are stored in `demos` root directory. They MUST be generated automatically from project templates using replay files.
- Maintainers SHOULD run `make scripts` command regularly to ensure that demo projects are up to date.

> 🚧 **UNDER CONSTRUCTION**
>
> This page or paragraph is yet to be written. Come back later.

## Tests

## Code Review
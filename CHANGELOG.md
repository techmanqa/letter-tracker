# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Received Date field in the "Add New Letter" page to allow tracking incoming letters from creation.
- Saved addresses dropdown in the "Edit Letter" page, enabling users to update their address for letters in "Draft" status.

### Changed
- Improved status management: letters are now automatically set to "Draft" if no sent or received dates are provided.
- Automatic status transitions: adding a date to a "Draft" letter now automatically updates its status to "Sending" or "Receiving" based on the letter type.
- Enhanced validation in the edit page to prevent moving a letter out of "Draft" status without at least one date.
- Updated the "Mark as Completed" logic to require both sent and received dates.

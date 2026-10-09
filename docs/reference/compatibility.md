# Compatibility

Add New Menu Builder is an **Editor-only** plugin. Its source includes compatibility branches intended for Unreal Engine **5.3–5.8**. It does not add code to packaged games.

## Ordering differences

| Engine version | Menu ordering path |
| --- | --- |
| 5.3–5.6 | Legacy ToolMenus insertion places configured entries ahead of native entries; arbitrary mixed order in the final menu is limited. |
| 5.7–5.8 | Menu section sorter applies the saved mixed order of native and custom shortcut or category rows. |

These differences affect the top-level shortcut and category arrangement. Unreal category contents remain under Unreal's control in every version.

## Test status

This documentation does not yet include a release-specific build and editor UI test matrix for every version in the range. Source compatibility and a successful build are different from verifying the complete user workflow in each editor. Version-specific results will be added here as they are confirmed.

When reporting a version problem, include the exact Unreal Engine version, whether the plugin built, and the behavior you observed in the Content Browser menu.

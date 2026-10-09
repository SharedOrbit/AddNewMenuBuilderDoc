# Installation

Add New Menu Builder is an **Unreal Editor plugin**. It changes the Content Browser's **Add New** menu; it does not add a gameplay system.

## Add the plugin to a project

1. Place the `AddNewMenuBuilder` folder in your Unreal project's `Plugins` directory.
2. Open or restart the project in Unreal Editor. If Unreal asks to build editor modules, let it complete the build.
3. In the Content Browser, open a folder where assets can be created and open **Add New**.
4. Select **Add New Menu Builder** to open its editor tab.

The plugin descriptor has `EnabledByDefault` enabled. If your project disables it explicitly, enable **Add New Menu Builder** in the Plugins window and restart the editor.

::: tip Next step
Follow [Quick Start](/guide/quick-start) to create a shortcut and a category.
:::

## What gets saved

Shortcut, category, entry, and ordering settings are stored in the project's **Editor configuration**. Keep that configuration in your project's version control when teammates should see the same menu layout.

The plugin itself contains an Editor module. It does not need to be active in a packaged game.

## Unreal Engine versions

The source has compatibility paths for Unreal Engine 5.3 through 5.8. See [Compatibility](/reference/compatibility) for the current documentation and ordering differences between engine versions.

# Troubleshooting

## I cannot find Add New Menu Builder

Check that the plugin is under the project's `Plugins/AddNewMenuBuilder` folder, is enabled, and its Editor module loaded successfully. Restart Unreal Editor after adding or enabling it. Open a Content Browser folder, use **Add New**, then choose **Add New Menu Builder**.

## My custom item is disabled or does not create an asset

Select the shortcut or category entry in the editor tab and inspect **Asset Class**. The class must support Content Browser asset creation. The status text under the fields indicates when the selection is ready. Also make sure the current Content Browser folder is writable.

Some classes prompt for additional options before creation. If you cancel that dialog, no asset is created.

## I cannot edit an Unreal row

Unreal shortcut and category rows are shown so you can arrange them alongside custom rows. Their built-in names and actions remain controlled by Unreal. Select a **Custom** row to edit its details.

## I cannot move an entry inside an Unreal category

The plugin only edits entries that you add inside a custom category. An Unreal category heading can be moved; the native entries inside it cannot.

## The editor list and the Add New menu have different mixed orders

Check your Unreal Engine version. Before 5.7, the plugin uses a legacy ToolMenus insertion path that places configured entries ahead of native entries. See [Compatibility](/reference/compatibility).

On 5.7 or later, reopen **Add New** after changing order and check the result. The refresh icon beside Shortcuts or Categories clears that list's custom order if you want to start over.

## My icon does not appear

Choose a valid Texture2D asset in the **Icon** field. The icon asset must be available to the Editor. If you do not need a custom icon, clear the field to use the available class or factory icon.

## A teammate sees a different menu

The settings are saved in the project's Editor configuration. Make sure the relevant project configuration is shared through your team's version control, and reopen the Editor after pulling changes if needed.

Still stuck? See [Contact](/contact) and include your engine version and a screenshot of both the editor tab and the Add New menu.

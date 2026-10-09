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

Still stuck? See [Contact](/contact) and include your engine version and a screenshot of both the editor tab and the Add New menu.

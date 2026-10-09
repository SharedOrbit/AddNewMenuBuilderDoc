# Category Entries

Entries are the asset creation actions inside one of your custom categories.

## Add an entry

1. On the **Categories** page, select a **Custom** category.
2. Click **+** beside **Entries**.
3. Set the entry's **Name** and optional **Tooltip**.
4. Choose an **Asset Class** that can be created in the Content Browser.
5. Optionally select a Texture2D **Icon**.

New entries are added to the end of that category's entry list. Reopen **Add New** and expand the category to check the result.

## Reorder and remove entries

Drag entries to change their order within the selected custom category. The entry context menu also has **Move Up**, **Move Down**, and **Delete** actions. Use **−** beside Entries to remove the selected entry.

The Entries section edits only your custom category. Unreal's own category contents are not changeable here.

## What happens when an entry is selected

The plugin chooses a suitable Unreal asset factory for the selected class. If the class is a valid Blueprint parent and no direct asset factory applies, it can use a Blueprint creation path. Unreal may still show a class-specific configuration dialog when creating the asset.

See [Asset Classes & Icons](/reference/asset-classes) for valid choices and troubleshooting.

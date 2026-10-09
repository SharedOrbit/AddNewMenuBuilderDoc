# Asset Classes & Icons

Each custom shortcut or category entry points to an **Asset Class**. Choose the asset type you want Unreal to create, such as **Material**. You do not need to choose a factory class yourself.

## Choose a creatable class

Select a custom shortcut or entry, then use the **Asset Class** picker. The plugin looks for a suitable Unreal factory and can create a Blueprint asset when the selected class is a valid Blueprint parent.

The status text below the fields reports whether the selected class is ready for Content Browser creation. A class that cannot be saved as an asset or has no supported creation path should be replaced with another class.

On Unreal Engine 5.4 and later, the class picker filters classes to likely creatable choices. On 5.3, selection is validated after you pick a class.

::: tip Example
For a direct shortcut that creates a new Material asset, name the shortcut `Material` and select **Material** as its Asset Class. You can use the same class in an entry inside a custom category.
:::

## Add an icon

The optional **Icon** field accepts a **Texture2D** asset. Choose an icon that already exists in the project. Leave the field empty to use the class or factory's available icon.

## Asset creation behavior

When you choose a custom menu item, the plugin creates a unique asset name in the currently selected Content Browser folder. Some asset types open an Unreal configuration step before the new asset is created. Invalid or unavailable classes cannot be created.

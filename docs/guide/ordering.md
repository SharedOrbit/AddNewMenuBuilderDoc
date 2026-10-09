# Rules

The **Shortcuts** and **Categories** pages each have a single ordered list containing Unreal rows and your own rows. The **Entries** list controls the order inside one custom category.

## Move items

- Drag a shortcut or category row to a new position.
- Use **Move Up** or **Move Down** in a row's context menu when you prefer a one-step move.
- Drag entries inside a custom category, or use their context menu move actions.

The label at the right of a shortcut or category row identifies it as **Unreal** or **Custom**.

## What can change

| Item | Reorder | Edit its details here |
| --- | --- | --- |
| Unreal shortcut | Yes, subject to engine version behavior below | No |
| Custom shortcut | Yes | Yes |
| Unreal category heading | Yes, subject to engine version behavior below | No |
| Custom category heading | Yes | Yes |
| Entry in a custom category | Yes, within that category | Yes |
| Entry inside an Unreal category | No | No |

The refresh icon beside **Shortcuts** or **Categories** clears that list's saved order. It does not delete the custom items.

## Engine version behavior

On Unreal Engine 5.7 and later, the plugin uses a menu section sorter to place Unreal and custom shortcuts or category headings according to the saved mixed order.

For Unreal Engine versions before 5.7, the compatibility path inserts configured items ahead of native Add New items. The editor list still lets you arrange rows, but the final menu cannot apply every mixed Unreal/custom position on those older ToolMenus APIs. This limitation does not change the contents of Unreal categories.

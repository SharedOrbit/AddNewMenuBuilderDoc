# Quick Start

Create a shortcut that appears directly in Unreal's **Add New** menu, then a custom category with its own asset entries. The screenshots below use **My Actor** as the shortcut and **Important** as the category.

## Quick Start Tutorial

<div class="video-frame">
  <iframe
    src="https://www.youtube-nocookie.com/embed/vaOH8m1dfSM"
    title="Add New Menu Builder quick start tutorial video"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
  </iframe>
</div>

## 1. Open the builder

In the Content Browser, open a folder where you can create assets. Click **Add New → Add New Menu Builder**. The editor tab has **Shortcuts** and **Categories** at the top right.

## 2. Add a shortcut

1. Select **Shortcuts** and click **+** beside the list. A new **Custom** row appears at the top.
2. Give it a **Name**, such as `My Actor`, then choose an **Asset Class**. The example uses `Actor`.
3. Check the status below the fields. Green **Ready** text means Unreal can create an asset from that class. **Tooltip** and **Icon** are optional.

The shortcut will appear directly in **Add New**, without opening a category first.

<figure class="qs-shot">
  <img src="/images/quick-start/quick-start-shortcut.png" alt="Shortcuts page with the custom My Actor row, Name, Asset Class and green Ready status" width="1058" height="270" loading="lazy" decoding="async">
</figure>

## 3. Add a category and entries

1. Select **Categories** and click **+** beside the category list. Name the new **Custom** category, for example `Important`.
2. Keep that category selected and click **+** beside **Entries**. Give the entry a **Name**, such as `My Class`, and choose its **Asset Class**.
3. Repeat the entry step for more assets. Each entry becomes an action inside the category's submenu.

<figure class="qs-shot">
  <img src="/images/quick-start/quick-start-category.png" alt="Categories page showing Important selected, its Entries list and the My Class entry settings" width="1056" height="580" loading="lazy" decoding="async">
</figure>

## 4. Choose the asset type and optional icon

Both shortcuts and category entries have an **Asset Class** picker. Open it, search for the class you want, and confirm that the status below the fields says **Ready**. Not every class shown in the picker can be created as a Content Browser asset; if the status is not ready, choose another class.

<figure class="qs-shot">
  <img src="/images/quick-start/quick-start-asset-class.png" alt="Asset Class picker open above an entry with Actor selected and green Ready status" width="1065" height="610" loading="lazy" decoding="async">
</figure>

To give an item its own image, choose an existing **Texture2D** in the optional **Icon** picker. Leave it empty to use the available default icon.

<figure class="qs-shot">
  <img src="/images/quick-start/quick-start-icon.png" alt="Icon asset picker showing Texture2D choices for a custom category entry" width="1069" height="560" loading="lazy" decoding="async">
</figure>

## 5. Check the result in Add New

Return to the Content Browser and reopen **Add New**. The shortcut appears in the main menu; your category opens a submenu with the entries you added. Click one of your items to create an asset in the selected folder.

<figure class="qs-shot qs-shot--menu">
  <img src="/images/quick-start/quick-start-menu-result-cropped.png" alt="Content Browser Add New menu showing My Actor as a shortcut and Important as a category with custom entries" width="384" height="450" loading="lazy" decoding="async">
</figure>

Changes are saved as you edit; there is no separate Save button. Drag rows in **Shortcuts**, **Categories**, or a custom category's **Entries** list to change their order. Unreal category contents cannot be edited here. See [Rules](/guide/rules) for the full list.

# Open in Jira - Firefox AddOn

YEI! This is the **Open in Jira** for your Mozilla Firefox.

If you are lazy like me, and also you are tired to copy/paste and type the Jira URL, for example, when you have a Google Drive Spreadsheet or Excel with tons of IDs not linked at all... well, well, now you have the solution...

### Configuration

1. Since it's not validated yet, you must download and install **jpm** tools. Just [download and follow the steps](https://developer.mozilla.org/en-US/Add-ons/SDK/Tools/jpm#Installation).
1. Download / Clone this repo.
2. Since this AddOn it's not validated yet, you have to use modify the parameters and then pack this.
2. Enter to the `index.js` file, and config the Jira URL, by adding your Jira instance data:

    Ex.
    
    ```javascript
    var url = "https://yourcompany.atlassian.net/browse/";
    ```
3. Then on your console, on the AddOn Folder, run:

    ```bash
    jpm run    
    ```
    This will raise a Firefox and you can try the Extension, by following the steps on **Usage** section.

4. If everything it's ok, you run:

    ```bash
    jpm xpi    
    ```
    This will create on the root folder a `.xpi` file. If everything it's ok, you'll see:
    
    ```
    JPM info Successfully created xpi at /path/to/your-extension-name/@your-extension-name.xpi
    ```
    
3. Load the extension, by Ctrl+O key combination (Cmd+O on Mac) selecting the `.xpi` file. 
4. This will request for the Instalation of the extension. Just click on `Install`.
4. All good..


### Usage

1. Select a Jira ID from your document/spreadsheet or any other place you like.
2. Right Click.
3. Select **Open in Jira**

    ![ext](http://i.imgur.com/h2oSNIs.png)

4. Done, will open a new Tab with your Jira.


### To Done

* Setting interface for your Jira URL

### Suggestions?

![watch](http://i.imgur.com/OjTU4Bz.jpg)
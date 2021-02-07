this.manifest = {
    "name": "APRSTime",
    "icon": "icon48.png",
    "settings": [
        {
            "tab": i18n.get("settings"),
            "group": "General",
            "name": "disabled",
            "type": "checkbox",
            "label": "Disable"
        },
		{
            "tab": i18n.get("settings"),
            "group": "General",
            "name": "ip",
            "type": "text",
			"text": "Found in Livesplit Websocket layout settings",
            "label": "Local IP"
        },
		{
            "tab": i18n.get("settings"),
            "group": "Debugging",
            "name": "intercept",
            "type": "checkbox",
            "label": "Intercept next main-html.js"
        }
    ],
    "alignment": []
};

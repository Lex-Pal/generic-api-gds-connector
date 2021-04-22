# Generic GDS connector to get data by API
Using this connector we can use an API as data source for [Data Studio] reports.

## Deploy a Community Connector yourself

1.  Visit [Google Apps Script](https://script.google.com/) and create a new
    project.
1.  In the Apps Script development environment, select **View > Show manifest
    file**. Replace the contents of this file with the content of the
    `src/appsscript.json` file from the repository.
1.  For every `.js` file under `src`, you will need to create a file in Apps
    Scripts (**File > New > Script File**), then copy over the content from the
    repository.
1.  To use the Community Connector in Data Studio, follow the
    [guide on Community Connector Developer site](https://developers.google.com/datastudio/connector/use).

## Using the connector in Data Studio

Once you've set up and deployed the connector, follow the
[Use a Community Connector] guide to use the connector in Data Studio.

**Note**: After using the connector in Data Studio, as long as you do not
[revoke access], it will remain listed in the [connector list] for easy access
when [creating a new data source].

### Configuration

#### JSON data source URL
Enter the URL of API with credentials in the query. API's response must be in [JSON] format.

In case of an "Invalid JSON format" error, validate your JSON using a validation tool like [JSONLint.com].

**Note**: The first row of the dataset is used to determine the data schema.

#### Root node

You should set a root node name value if API's response contains data that is wrapped like

```json
{
  "rows": [{}]
}
```
#### Caching
Enable caching by checking the 'Cache response' checkbox. This is usefull with large datasets. The cache will expire after ten minutes. The rows in your dataset may not exceed 100KB

## Local development

To develop locally we can use the `clasp` tool. More details in [the official documentation].

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
To start working on this project you just need the following:
* Node.js >= v6.0.0
* Node Package Manager
* A Google Account

### Installing
Checkout the latest master branch from GitHub and navigate to it using your Terminal or Command Prompt, then run the following to install all the dependencies:
```
npm install
```

If you're not already logged in Clasp with your Google Account, run
```
npm run clasp-login
```

The following command will initialize a new Standalone Google Apps Script with the code:
```
npm run new-script
```

### Running the tests
To run the tests just run the following
```
npm run test
```

And to show the test coverage
```
npm run coverage
```

### Deployment
After modifying the connector you can push the changes to Google Apps Script using
```
npm run push
```

Then open the script in your browser
```
npm run open
```

And use the web interface to deploy the connector as described in [their help pages].


[Data Studio]: https://datastudio.google.com
[JSON]: https://www.json.org/
[Use a Community Connector]: https://developers.google.com/datastudio/connector/use
[revoke access]: https://support.google.com/datastudio/answer/9053467
[connector list]: https://datastudio.google.com/c/datasources/create
[creating a new data source]: https://support.google.com/datastudio/answer/6300774
[JSONLint.com]: https://jsonlint.com/
[the official documentation]: https://developers.google.com/apps-script/guides/clasp
[their help pages]: https://developers.google.com/datastudio/connector/deploy
# Generic GDS connector to get data by API
Using this connector we can use an API as data source to [Data Studio].

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

[Data Studio]: https://datastudio.google.com
[JSON]: https://www.json.org/
[Use a Community Connector]: https://developers.google.com/datastudio/connector/use
[revoke access]: https://support.google.com/datastudio/answer/9053467
[connector list]: https://datastudio.google.com/c/datasources/create
[creating a new data source]: https://support.google.com/datastudio/answer/6300774
[JSONLint.com]: https://jsonlint.com/
[the official documentation]: https://developers.google.com/apps-script/guides/clasp
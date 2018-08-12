# KudoWall DynamoDB resolvers

## listKudos

### REQUEST:
```
{
  "version": "2017-02-28",
  "operation": "Scan",
  "nextToken": $util.toJson($util.defaultIfNullOrEmpty($ctx.args.nextToken, null)),
}
```

### RESPONSE:
```
{
  "items": $util.toJson($context.result.items),
  "nextToken": $util.toJson($util.defaultIfNullOrBlank($context.result.nextToken, null))
}
```

## createKudo

### REQUEST:
```
{
  "version": "2017-02-28",
  "operation": "PutItem",
  "key": {
    "id": $util.dynamodb.toDynamoDBJson($util.autoId()),
  },
  #set($myKudo = $util.dynamodb.toMapValues($ctx.args.input))
  #set($myKudo.createdAt = $util.dynamodb.toString($util.time.nowISO8601()))
  "attributeValues": $util.toJson($myKudo)
}
```

### RESPONSE:
```
$util.toJson($ctx.result)
```
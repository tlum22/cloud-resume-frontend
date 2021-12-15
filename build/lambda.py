import json
import boto3

def lambda_handler(event, context):
    
    # connect to DynamoDB resource
    client = boto3.resource('dynamodb')
    
    # create a DynamoDB client to visitor_count table
    table = client.Table('visitor_count')
    
    # increment visitor_count for index.html
    # https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.Python.03.html#GettingStarted.Python.03.02
    # https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dynamodb.html#DynamoDB.Client.update_item
    response = table.update_item(
        Key={
            'path': 'index.html'
        },
        AttributeUpdates={
            'visitor_count':{
                'Value': 1,
                'Action': 'ADD'
            }
        }
    )
    
    # get visitor_count from the visitor_count table for index.html
    response = table.get_item(
        Key={
            'path': 'index.html'
        }    
    )
    visitor_count = response['Item']['visitor_count']
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': visitor_count
    }

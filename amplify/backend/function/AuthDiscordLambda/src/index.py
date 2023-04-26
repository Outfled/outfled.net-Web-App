import json

response_headers = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'    
}

def handler(event, context):
    try:
        json_object  = json.loads(json.dumps(event))
        user_api_key = json_object["api_key"]
        
        # Open the json-data files
        api_keys_file = open('api_keys.json')
        client_data_file = open('client_data.json')
    

        # Validate the api key
        valid_key = False
        for key in json.load(api_keys_file):
            if key == user_api_key:
                valid_key = True
                break
    
        api_keys_file.close()
    
        # Invalid api key
        if valid_key == False:
            return {
                "statusCode" : 401,
                "headers" : {
                    "Content-type": "application/json"
                },
                "body" : "Invalid API Key"
            }
    
        user_client_id = json_object["client_id"]
    
        # Validate the client_id
        client_url = ""
        for client_array in json.load(client_data_file):
            if client_array["id"] == user_client_id:
                client_url = client_array["url"]
                break
        
        client_data_file.close()
        
        # Client ID not found
        if client_url == "":
            return { "statusCode" : 404, "headers" : { "Content-type": "application/json"}, "body" : "Client not found" }
            
        # return the client url
        return {
            "statusCode" : 200,
            "headers" : {
                "Content-type" : "application/json"
            },
            "body" : client_url      
        }
    
    except:
        return { "statusCode" : 400, "headers" : { "Content-type": "application/json" }, "body" : "Invalid body data. The api_key and client_id values are required" }
<pre>

==================== PART 1. CODING ====================

serverless.yaml
  see
      # new code - begin
      # new code - end

index.js
  see
      // new code - begin
      // new code - end



==================== PART 2. INSTALLATION ====================

Install jre/jdk
  http://www.oracle.com/technetwork/java/javase/downloads/jdk10-downloads-4416644.html

sudo npm install eslint -g



sudo npm install -g serverless


npm install --save serverless-dynamodb-local
sls dynamodb install


https://github.com/dherault/serverless-offline
cd /Users/vikash/repo/my-express-application
npm install serverless-offline --save-dev



======== NOT REQUIRED - CREATE TABLE - BEGIN ========
        // cd /Users/vikash/repo/my-express-application
        // sls dynamodb start --migrate
        //   NOTE: migrate creates table given in serverless.yaml
======== NOT REQUIRED - CREATE TABLE - END ========




======== NOT REQUIRED - AWS CLI - BEGIN ========

        https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html

          https://www.python.org/downloads/release/python-361/
            curl -O https://bootstrap.pypa.io/get-pip.py
            python3 get-pip.py --user

            add to path
              https://www.architectryan.com/2012/10/02/add-to-the-path-on-mac-os-x-mountain-lion/
              sudo nano /etc/paths
                /Users/vikash/Library/Python/3.6/bin
                ctrl+x
                Yes
                ENTER

            not necessary
                  sudo rm -rf /Library/Frameworks/Python.framework/Versions/2.7
                  sudo rm -rf "/Applications/Python 2.7"

            change /Library/Frameworks/Python.framework/Versions/3.6/bin/pip3
              # from pip import main
              from pip._internal import main

            pip3 install awscli --upgrade --user

          # terminal
          aws configure
            AWS Access Key ID [None]: ak
            AWS Secret Access Key [None]: sak
            Default region name [None]: us-east-1         
            Default output format [None]: 

          cd /Users/vikash/repo/my-express-application
            aws dynamodb list-tables --endpoint-url http://localhost:8000
                            {
                              "TableNames": [
                                  "usersTable"
                              ]
                            }

            aws dynamodb describe-table --table-name usersTable --endpoint-url http://localhost:8000
                            {
                                "Table": {
                                    "AttributeDefinitions": [
                                        {
                                            "AttributeName": "email",
                                            "AttributeType": "S"
                                        }
                                    ],
                                    "TableName": "usersTable",
                                    "KeySchema": [
                                        {
                                            "AttributeName": "email",
                                            "KeyType": "HASH"
                                        }
                                    ],
                                    "TableStatus": "ACTIVE",
                                    "CreationDateTime": 1527343268.718,
                                    "ProvisionedThroughput": {
                                        "LastIncreaseDateTime": 0.0,
                                        "LastDecreaseDateTime": 0.0,
                                        "NumberOfDecreasesToday": 0,
                                        "ReadCapacityUnits": 1,
                                        "WriteCapacityUnits": 1
                                    },
                                    "TableSizeBytes": 0,
                                    "ItemCount": 0,
                                    "TableArn": "arn:aws:dynamodb:ddblocal:000000000000:table/usersTable"
                                }
                            }
======== NOT REQUIRED - AWS CLI - END ========
  


==================== PART 3. DynamoDB SHOULD NOT BE RUNNING - BEGIN ====================
  do
    ctrl + c
    on the dynamodb console
      to close the dynamodb instance
      else you will get "Could not start server on port 8000: Address already in use"
==================== PART 3. DynamoDB SHOULD NOT BE RUNNING - END ====================



==================== PART 4. Run SEVERLESS OFFLINE (stars DynamoDB internally) - BEGIN ====================

          ============ NOT REQUIRED - SAME AS 'npm start' - BEGIN ==============
                          https://github.com/dherault/serverless-offline

                                cd /Users/vikash/repo/my-express-application
                                serverless offline start
                                  or
                                sls offline start
          ============ NOT REQUIRED - SAME AS 'npm start' - END ==============

  cd /Users/vikash/repo/my-express-application
  npm start


          > my-express-application@1.0.0 start /Users/vikash/repo/my-express-application
          > serverless offline start

          Dynamodb Local Started, Visit: http://localhost:8000/shell
          Serverless: DynamoDB - created table usersTable
          Serverless: Starting Offline: dev/us-east-1.

          Serverless: Routes for app:
          Serverless: ANY /
          Serverless: ANY /{proxy*}

          Serverless: Offline listening on http://localhost:3000


==================== PART 4. Run SEVERLESS OFFLINE (stars DynamoDB internally) - END ====================


==================== PART 5. Test SEVERLESS OFFLINE (stars DynamoDB internally) - BEGIN ====================

  postman
    hit below from postman


    request
        POST http://localhost:3000
          Header:
            Content-Type  application/json
          body
            {    
              "email": "my_email_1@example.com"
            }
    response
          Added item: {}

    request
        GET http://localhost:3000?email=my_email_1@example.com
    response (item found)
          GetItem succeeded:{
            "Item": {
              "email": "my_email_1@example.com"
            }
          }

    request
        GET http://localhost:3000?email=my_email_2@example.com
    response (item not found)
          GetItem succeeded:{}


==================== PART 5. Test SEVERLESS OFFLINE (stars DynamoDB internally) - END ====================
</pre>

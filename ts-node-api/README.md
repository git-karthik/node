# Steps to run this application in a Docker Container
1. Get the docker up and running. Run 'docker images' from your CLI to see the status.
2. Create a docker build using command . -f flag is to point the dockerfile location. -t specifies the tag to which to save the new image if the build succeeds.
    `docker build --rm -f "ts-node-api\Dockerfile" -t ts-node-api:1.0.0 "ts-node-api"`    
3. Execute the container using command. Change <PORT> to desired port number.
    `docker run -p <PORT>:3000 -d ts-node-api:1.0.0`


## What I Did & why In Case I Forgot

> This is Basic VanillaJS Frontend using html css and js
>
> There are Two Method to run this
>
> - DockerFile se run kr lo
> - yaml file se run kr lo

### DockerFile

> First we build the docker image in current directory
>
> - `docker build -t my-html-app .`
>
> Now we can run the Image
>
> - `docker run -d -p 8080:80 vanillafrontend`

### Yaml

> First we build the docker image , vanillafrontend directory me aakr
>
> - `docker-compose up --build`
>
> To Close the docker compose
>
> - `docker-compose down`

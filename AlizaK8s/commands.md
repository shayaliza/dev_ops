# All Commands

> I have install kubectl and minikube in the my system

## kubectl commands

` kubectl create deployment appname --image=dockerimagepath:tag`

`kubectl get doployments`

`kubectl get pods`

`kubectl delete deployemnt deployementName`

`kubectl logs podName`

`kubectl describe pod`

## minikube Commands

> Minikube is local cloud where we can do things

`minikube status`

`minikube start`

`minikube dashboard`

---

## Deploying application to k8s without Yaml

- <b> Step 1 </b>First Check is minikube is running if not running do
  `minikube start`

- <b> Step 2 </b>Create a deployemnt in K8s locally
  `kubectl create deployment mern-app --image=shayaliza/todo:web`

- <b> Step 4 </b>Check if the deployment is Succesfull `kubectl get deployments`

- <b> Step 5 </b>Expose the port to local System and start Service
  ` kubectl expose deployment deploymentName --type=LoadBalancer --port=3000`

- <b> Step 6 </b>Check if the Service has Started in kubectl
  `kubectl get services`

- <b> Step 7 </b>make minikube accessible to that service
  `minikube service deploymentName`

<br/>
<br/>

> Scaling the app `kubectl scale deployment deploymentName --replicas=3`
>
> Changing Veriosn to new Image
> `kubectl set image deployment deploymentName containerName=DockerImagePath:tag`
>
> RollOut `kubectl rollout undo deployment deploymentName`

---

## Deploying application to k8s with Yaml

```
Two files are needed deployement.yaml and service.yaml
We can combine in to make one file kube.yaml
We can Change Yaml file directly for replicas and version Change
```

- <b> Step 1 </b>Start the deployement `kubectl apply -f kube.yaml`

- <b> Step 2 </b>Allow minukube to access that service
  `minikube service deploymentName`

---

```
one big issue resooved minikube api is stopped and docker context err

W0618 10:32:00.013786 12984 main.go:291 Unable to resolve the current Docker CLI
context "default": context "default": context not found: open
C:\Users\user\.docker\contexts\meta\37a8eec1ce19687d132fe29051dca629d164e2c4958ba141d5f4133a33f0688f\meta.json:
The system cannot find the path specified.
```

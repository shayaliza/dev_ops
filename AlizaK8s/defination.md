# Kubernetes (K8s) Important Terms

## kubectl

The command-line tool used to interact with Kubernetes clusters. It allows you
to deploy applications, inspect and manage cluster resources, and view logs.

## Minikube

A tool that lets you run a single-node Kubernetes cluster on your local machine.
It is useful for development and testing purposes.

## Rollout

The process of deploying a new version of an application to a Kubernetes
cluster. It ensures that updates are done in a controlled manner, typically with
rolling updates to minimize downtime.

## Rollback

The process of reverting to a previous version of an application if the new
version has issues. This helps maintain application stability.

## Self-healing

A feature in Kubernetes where the system automatically detects and replaces
failed or unhealthy application components, ensuring high availability.

---

### Pod

**Definition:** The smallest and simplest Kubernetes object. A Pod represents a
single instance of a running process in a cluster and can contain one or more
containers.

### Node

**Definition:** A worker machine in Kubernetes, which can be either a virtual or
a physical machine. Each node runs pods and is managed by the Kubernetes master.

### Cluster

**Definition:** A set of nodes that run containerized applications managed by
Kubernetes. The cluster is the foundation of Kubernetes architecture.

### Namespace

**Definition:** A way to divide cluster resources between multiple users (via
resource quota). Namespaces provide a mechanism for isolating groups of
resources within a single cluster.

### Deployment

**Definition:** An object in Kubernetes that manages a replicated application,
ensuring the correct number of pods are running and updating them as needed.

### Service

**Definition:** An abstraction that defines a logical set of pods and a policy
to access them, often used to expose an application running on a set of pods.

### ConfigMap

**Definition:** An API object used to store non-confidential data in key-value
pairs. ConfigMaps can be used to configure applications.

### Secret

**Definition:** Similar to ConfigMap, but used to store sensitive data such as
passwords, OAuth tokens, and SSH keys.

### PersistentVolume (PV)

**Definition:** A piece of storage in the cluster that has been provisioned by
an administrator. It is used to store data persistently.

### PersistentVolumeClaim (PVC)

**Definition:** A request for storage by a user. It can be used to dynamically
provision storage and binds to a PersistentVolume.

### ReplicaSet

**Definition:** A controller that ensures a specified number of pod replicas are
running at any given time.

### Ingress

**Definition:** An API object that manages external access to the services in a
cluster, typically HTTP. It provides load balancing, SSL termination, and
name-based virtual hosting.

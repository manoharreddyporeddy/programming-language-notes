# containers vs vms
vm        =  OS > dependencies/libraries > application
container =       dependencies/libraries > application

scenario:
       1 app on                         1 server hardware  - not  efficient
multiple app on multiple vms        (on 1 server hardware) -      efficient, since        VM has  1 OS in it
multiple app on multiple containers (on 1 server hardware) - most efficient, since Container has no OS in it

creation:
virtual machine: server hardware > os > hypervisor > vm1, vm2, vm3..
container:       server hardware > os >            > system chunks called container (container1, container2, container3..)  (chunks are made using kernal tools: namespaces,cgroups,chroots)

docker containers:
 docker creates containers (using kernal tools)
  linux computer > docker deamon > register & login with "docker hub", the registry
  docker client (run commands: docker run apache, docker run rails, etc)
   -> talk to docker deamon
   ->  get image (apache, rails, etc.) if not cached, by talking to docker hub
   ->  cache image 
   ->  start container with requested image by talking to linux OS (repeat to start another container with another image)

kubernetes containers:
TBD

docker swarm:
TBD

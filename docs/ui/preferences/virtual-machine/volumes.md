---
sidebar_label: Volumes
title: Volumes (macOS & Linux)
---

<head>
  <link rel="canonical" href="https://docs.rancherdesktop.io/ui/preferences/virtual-machine/volumes"/>
</head>

import TabsConstants from '@site/core/TabsConstants';

## Mount Type

### reverse-sshfs

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.16/preferences/macOS_virtualMachine_tabVolumes.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.16/preferences/Linux_virtualMachine_tabVolumes.png)

</TabItem>
</Tabs>

* "[reverse-sshfs](https://github.com/lima-vm/lima/blob/master/docs/mount.md#reverse-sshfs)"
  * 👀exposes the filesystem -- via -- running a SFTP server | host👀
    * host instance will initiate an SSH connection | guest / -- allowing it to -- connect to the SFTP server
  * default mount type / used | application.
* how to enable it?
  * VM, `Volumes` tab 

### 9p

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.16/preferences/macOS_virtualMachine_tabVolumes_9P.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.16/preferences/Linux_virtualMachine_tabVolumes_9P.png)

</TabItem>
</Tabs>

* ⚠️ **experimental** setting ⚠️
* 👀expose the filesystem -- via -- QEMU's `virtio-9p-pci` devices. 👀
* how to enable it?
  * VM, `Volumes` tab 
  * Cache Mode
    * == caching policy
    * allowed
      * `none`,
      * `loose`,
      * `fscache`,
      * `mmap`
        * default
  * Memory Size in KiB
    * -- used for the -- "9p" packet size
    * \>= 4 KiB
    * default size is 128 KiB
  * Protocol Version
    * allowed
      * `9p2000`
      * `9p2000.u`
      * `9p2000.L`
        * default
  * Security Model
    * allowed
      * `passthrough`
      * `mapped-xattr`
      * `mapped-file`
      * `none`
        * default

### virtiofs

<Tabs groupId="os">
<TabItem value="macOS">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.16/preferences/macOS_virtualMachine_tabVolumes.png)

</TabItem>
<TabItem value="Linux">

![](https://suse-rancher-media.s3.amazonaws.com/desktop/v1.16/preferences/Linux_virtualMachine_tabVolumes.png)

</TabItem>
</Tabs>

* ⚠️ **experimental** setting ⚠️
* how to enable it?
  * VM, `Volumes` tab 
* [`virtiofs`](https://virtio-fs.gitlab.io/) 
  * implemented -- via -- Apple `Virtualization.Framework` shared directory device.

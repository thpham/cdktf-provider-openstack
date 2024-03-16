# `containerinfraClustertemplateV1` Submodule <a name="`containerinfraClustertemplateV1` Submodule" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerinfraClustertemplateV1 <a name="ContainerinfraClustertemplateV1" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1 openstack_containerinfra_clustertemplate_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  coe: str,
  image: str,
  name: str,
  apiserver_port: typing.Union[int, float] = None,
  cluster_distro: str = None,
  dns_nameserver: str = None,
  docker_storage_driver: str = None,
  docker_volume_size: typing.Union[int, float] = None,
  external_network_id: str = None,
  fixed_network: str = None,
  fixed_subnet: str = None,
  flavor: str = None,
  floating_ip_enabled: typing.Union[bool, IResolvable] = None,
  hidden: typing.Union[bool, IResolvable] = None,
  http_proxy: str = None,
  https_proxy: str = None,
  id: str = None,
  insecure_registry: str = None,
  keypair_id: str = None,
  labels: typing.Mapping[str] = None,
  master_flavor: str = None,
  master_lb_enabled: typing.Union[bool, IResolvable] = None,
  network_driver: str = None,
  no_proxy: str = None,
  public: typing.Union[bool, IResolvable] = None,
  region: str = None,
  registry_enabled: typing.Union[bool, IResolvable] = None,
  server_type: str = None,
  timeouts: ContainerinfraClustertemplateV1Timeouts = None,
  tls_disabled: typing.Union[bool, IResolvable] = None,
  volume_driver: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.coe">coe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#coe ContainerinfraClustertemplateV1#coe}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#image ContainerinfraClustertemplateV1#image}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#name ContainerinfraClustertemplateV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.apiserverPort">apiserver_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#apiserver_port ContainerinfraClustertemplateV1#apiserver_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.clusterDistro">cluster_distro</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#cluster_distro ContainerinfraClustertemplateV1#cluster_distro}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dnsNameserver">dns_nameserver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#dns_nameserver ContainerinfraClustertemplateV1#dns_nameserver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dockerStorageDriver">docker_storage_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_storage_driver ContainerinfraClustertemplateV1#docker_storage_driver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_volume_size ContainerinfraClustertemplateV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.externalNetworkId">external_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#external_network_id ContainerinfraClustertemplateV1#external_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.fixedNetwork">fixed_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_network ContainerinfraClustertemplateV1#fixed_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.fixedSubnet">fixed_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_subnet ContainerinfraClustertemplateV1#fixed_subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#flavor ContainerinfraClustertemplateV1#flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.floatingIpEnabled">floating_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#floating_ip_enabled ContainerinfraClustertemplateV1#floating_ip_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#hidden ContainerinfraClustertemplateV1#hidden}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.httpProxy">http_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#http_proxy ContainerinfraClustertemplateV1#http_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.httpsProxy">https_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#https_proxy ContainerinfraClustertemplateV1#https_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#id ContainerinfraClustertemplateV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.insecureRegistry">insecure_registry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#insecure_registry ContainerinfraClustertemplateV1#insecure_registry}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.keypairId">keypair_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#keypair_id ContainerinfraClustertemplateV1#keypair_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#labels ContainerinfraClustertemplateV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.masterFlavor">master_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_flavor ContainerinfraClustertemplateV1#master_flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.masterLbEnabled">master_lb_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_lb_enabled ContainerinfraClustertemplateV1#master_lb_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.networkDriver">network_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#network_driver ContainerinfraClustertemplateV1#network_driver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.noProxy">no_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#no_proxy ContainerinfraClustertemplateV1#no_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.public">public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#public ContainerinfraClustertemplateV1#public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#region ContainerinfraClustertemplateV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.registryEnabled">registry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#registry_enabled ContainerinfraClustertemplateV1#registry_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.serverType">server_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#server_type ContainerinfraClustertemplateV1#server_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.tlsDisabled">tls_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#tls_disabled ContainerinfraClustertemplateV1#tls_disabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.volumeDriver">volume_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#volume_driver ContainerinfraClustertemplateV1#volume_driver}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `coe`<sup>Required</sup> <a name="coe" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.coe"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#coe ContainerinfraClustertemplateV1#coe}.

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.image"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#image ContainerinfraClustertemplateV1#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#name ContainerinfraClustertemplateV1#name}.

---

##### `apiserver_port`<sup>Optional</sup> <a name="apiserver_port" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.apiserverPort"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#apiserver_port ContainerinfraClustertemplateV1#apiserver_port}.

---

##### `cluster_distro`<sup>Optional</sup> <a name="cluster_distro" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.clusterDistro"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#cluster_distro ContainerinfraClustertemplateV1#cluster_distro}.

---

##### `dns_nameserver`<sup>Optional</sup> <a name="dns_nameserver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dnsNameserver"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#dns_nameserver ContainerinfraClustertemplateV1#dns_nameserver}.

---

##### `docker_storage_driver`<sup>Optional</sup> <a name="docker_storage_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dockerStorageDriver"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_storage_driver ContainerinfraClustertemplateV1#docker_storage_driver}.

---

##### `docker_volume_size`<sup>Optional</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.dockerVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_volume_size ContainerinfraClustertemplateV1#docker_volume_size}.

---

##### `external_network_id`<sup>Optional</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.externalNetworkId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#external_network_id ContainerinfraClustertemplateV1#external_network_id}.

---

##### `fixed_network`<sup>Optional</sup> <a name="fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.fixedNetwork"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_network ContainerinfraClustertemplateV1#fixed_network}.

---

##### `fixed_subnet`<sup>Optional</sup> <a name="fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.fixedSubnet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_subnet ContainerinfraClustertemplateV1#fixed_subnet}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#flavor ContainerinfraClustertemplateV1#flavor}.

---

##### `floating_ip_enabled`<sup>Optional</sup> <a name="floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.floatingIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#floating_ip_enabled ContainerinfraClustertemplateV1#floating_ip_enabled}.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.hidden"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#hidden ContainerinfraClustertemplateV1#hidden}.

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.httpProxy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#http_proxy ContainerinfraClustertemplateV1#http_proxy}.

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.httpsProxy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#https_proxy ContainerinfraClustertemplateV1#https_proxy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#id ContainerinfraClustertemplateV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_registry`<sup>Optional</sup> <a name="insecure_registry" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.insecureRegistry"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#insecure_registry ContainerinfraClustertemplateV1#insecure_registry}.

---

##### `keypair_id`<sup>Optional</sup> <a name="keypair_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.keypairId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#keypair_id ContainerinfraClustertemplateV1#keypair_id}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#labels ContainerinfraClustertemplateV1#labels}.

---

##### `master_flavor`<sup>Optional</sup> <a name="master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.masterFlavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_flavor ContainerinfraClustertemplateV1#master_flavor}.

---

##### `master_lb_enabled`<sup>Optional</sup> <a name="master_lb_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.masterLbEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_lb_enabled ContainerinfraClustertemplateV1#master_lb_enabled}.

---

##### `network_driver`<sup>Optional</sup> <a name="network_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.networkDriver"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#network_driver ContainerinfraClustertemplateV1#network_driver}.

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.noProxy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#no_proxy ContainerinfraClustertemplateV1#no_proxy}.

---

##### `public`<sup>Optional</sup> <a name="public" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.public"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#public ContainerinfraClustertemplateV1#public}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#region ContainerinfraClustertemplateV1#region}.

---

##### `registry_enabled`<sup>Optional</sup> <a name="registry_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.registryEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#registry_enabled ContainerinfraClustertemplateV1#registry_enabled}.

---

##### `server_type`<sup>Optional</sup> <a name="server_type" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.serverType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#server_type ContainerinfraClustertemplateV1#server_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#timeouts ContainerinfraClustertemplateV1#timeouts}

---

##### `tls_disabled`<sup>Optional</sup> <a name="tls_disabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.tlsDisabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#tls_disabled ContainerinfraClustertemplateV1#tls_disabled}.

---

##### `volume_driver`<sup>Optional</sup> <a name="volume_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.Initializer.parameter.volumeDriver"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#volume_driver ContainerinfraClustertemplateV1#volume_driver}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetApiserverPort">reset_apiserver_port</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetClusterDistro">reset_cluster_distro</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDnsNameserver">reset_dns_nameserver</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerStorageDriver">reset_docker_storage_driver</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerVolumeSize">reset_docker_volume_size</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetExternalNetworkId">reset_external_network_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedNetwork">reset_fixed_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedSubnet">reset_fixed_subnet</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFlavor">reset_flavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFloatingIpEnabled">reset_floating_ip_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHidden">reset_hidden</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpProxy">reset_http_proxy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpsProxy">reset_https_proxy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetInsecureRegistry">reset_insecure_registry</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetKeypairId">reset_keypair_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterFlavor">reset_master_flavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterLbEnabled">reset_master_lb_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNetworkDriver">reset_network_driver</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNoProxy">reset_no_proxy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetPublic">reset_public</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegistryEnabled">reset_registry_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetServerType">reset_server_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTlsDisabled">reset_tls_disabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetVolumeDriver">reset_volume_driver</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#create ContainerinfraClustertemplateV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#delete ContainerinfraClustertemplateV1#delete}.

---

##### `reset_apiserver_port` <a name="reset_apiserver_port" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetApiserverPort"></a>

```python
def reset_apiserver_port() -> None
```

##### `reset_cluster_distro` <a name="reset_cluster_distro" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetClusterDistro"></a>

```python
def reset_cluster_distro() -> None
```

##### `reset_dns_nameserver` <a name="reset_dns_nameserver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDnsNameserver"></a>

```python
def reset_dns_nameserver() -> None
```

##### `reset_docker_storage_driver` <a name="reset_docker_storage_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerStorageDriver"></a>

```python
def reset_docker_storage_driver() -> None
```

##### `reset_docker_volume_size` <a name="reset_docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetDockerVolumeSize"></a>

```python
def reset_docker_volume_size() -> None
```

##### `reset_external_network_id` <a name="reset_external_network_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetExternalNetworkId"></a>

```python
def reset_external_network_id() -> None
```

##### `reset_fixed_network` <a name="reset_fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedNetwork"></a>

```python
def reset_fixed_network() -> None
```

##### `reset_fixed_subnet` <a name="reset_fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFixedSubnet"></a>

```python
def reset_fixed_subnet() -> None
```

##### `reset_flavor` <a name="reset_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFlavor"></a>

```python
def reset_flavor() -> None
```

##### `reset_floating_ip_enabled` <a name="reset_floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetFloatingIpEnabled"></a>

```python
def reset_floating_ip_enabled() -> None
```

##### `reset_hidden` <a name="reset_hidden" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHidden"></a>

```python
def reset_hidden() -> None
```

##### `reset_http_proxy` <a name="reset_http_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpProxy"></a>

```python
def reset_http_proxy() -> None
```

##### `reset_https_proxy` <a name="reset_https_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetHttpsProxy"></a>

```python
def reset_https_proxy() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insecure_registry` <a name="reset_insecure_registry" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetInsecureRegistry"></a>

```python
def reset_insecure_registry() -> None
```

##### `reset_keypair_id` <a name="reset_keypair_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetKeypairId"></a>

```python
def reset_keypair_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_master_flavor` <a name="reset_master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterFlavor"></a>

```python
def reset_master_flavor() -> None
```

##### `reset_master_lb_enabled` <a name="reset_master_lb_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetMasterLbEnabled"></a>

```python
def reset_master_lb_enabled() -> None
```

##### `reset_network_driver` <a name="reset_network_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNetworkDriver"></a>

```python
def reset_network_driver() -> None
```

##### `reset_no_proxy` <a name="reset_no_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetNoProxy"></a>

```python
def reset_no_proxy() -> None
```

##### `reset_public` <a name="reset_public" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetPublic"></a>

```python
def reset_public() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_registry_enabled` <a name="reset_registry_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetRegistryEnabled"></a>

```python
def reset_registry_enabled() -> None
```

##### `reset_server_type` <a name="reset_server_type" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetServerType"></a>

```python
def reset_server_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_tls_disabled` <a name="reset_tls_disabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetTlsDisabled"></a>

```python
def reset_tls_disabled() -> None
```

##### `reset_volume_driver` <a name="reset_volume_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.resetVolumeDriver"></a>

```python
def reset_volume_driver() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerinfraClustertemplateV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerinfraClustertemplateV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerinfraClustertemplateV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerinfraClustertemplateV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference">ContainerinfraClustertemplateV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPortInput">apiserver_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistroInput">cluster_distro_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coeInput">coe_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserverInput">dns_nameserver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriverInput">docker_storage_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSizeInput">docker_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkIdInput">external_network_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetworkInput">fixed_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnetInput">fixed_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavorInput">flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabledInput">floating_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hiddenInput">hidden_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxyInput">http_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxyInput">https_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.imageInput">image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistryInput">insecure_registry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairIdInput">keypair_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavorInput">master_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabledInput">master_lb_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriverInput">network_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxyInput">no_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.publicInput">public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabledInput">registry_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverTypeInput">server_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabledInput">tls_disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriverInput">volume_driver_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPort">apiserver_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistro">cluster_distro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coe">coe</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserver">dns_nameserver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriver">docker_storage_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkId">external_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetwork">fixed_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnet">fixed_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabled">floating_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxy">http_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxy">https_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistry">insecure_registry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairId">keypair_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavor">master_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabled">master_lb_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriver">network_driver</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxy">no_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.public">public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabled">registry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverType">server_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabled">tls_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriver">volume_driver</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeouts"></a>

```python
timeouts: ContainerinfraClustertemplateV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference">ContainerinfraClustertemplateV1TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `apiserver_port_input`<sup>Optional</sup> <a name="apiserver_port_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPortInput"></a>

```python
apiserver_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_distro_input`<sup>Optional</sup> <a name="cluster_distro_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistroInput"></a>

```python
cluster_distro_input: str
```

- *Type:* str

---

##### `coe_input`<sup>Optional</sup> <a name="coe_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coeInput"></a>

```python
coe_input: str
```

- *Type:* str

---

##### `dns_nameserver_input`<sup>Optional</sup> <a name="dns_nameserver_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserverInput"></a>

```python
dns_nameserver_input: str
```

- *Type:* str

---

##### `docker_storage_driver_input`<sup>Optional</sup> <a name="docker_storage_driver_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriverInput"></a>

```python
docker_storage_driver_input: str
```

- *Type:* str

---

##### `docker_volume_size_input`<sup>Optional</sup> <a name="docker_volume_size_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSizeInput"></a>

```python
docker_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_network_id_input`<sup>Optional</sup> <a name="external_network_id_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkIdInput"></a>

```python
external_network_id_input: str
```

- *Type:* str

---

##### `fixed_network_input`<sup>Optional</sup> <a name="fixed_network_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetworkInput"></a>

```python
fixed_network_input: str
```

- *Type:* str

---

##### `fixed_subnet_input`<sup>Optional</sup> <a name="fixed_subnet_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnetInput"></a>

```python
fixed_subnet_input: str
```

- *Type:* str

---

##### `flavor_input`<sup>Optional</sup> <a name="flavor_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavorInput"></a>

```python
flavor_input: str
```

- *Type:* str

---

##### `floating_ip_enabled_input`<sup>Optional</sup> <a name="floating_ip_enabled_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabledInput"></a>

```python
floating_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hidden_input`<sup>Optional</sup> <a name="hidden_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hiddenInput"></a>

```python
hidden_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_proxy_input`<sup>Optional</sup> <a name="http_proxy_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxyInput"></a>

```python
http_proxy_input: str
```

- *Type:* str

---

##### `https_proxy_input`<sup>Optional</sup> <a name="https_proxy_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxyInput"></a>

```python
https_proxy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_input`<sup>Optional</sup> <a name="image_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.imageInput"></a>

```python
image_input: str
```

- *Type:* str

---

##### `insecure_registry_input`<sup>Optional</sup> <a name="insecure_registry_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistryInput"></a>

```python
insecure_registry_input: str
```

- *Type:* str

---

##### `keypair_id_input`<sup>Optional</sup> <a name="keypair_id_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairIdInput"></a>

```python
keypair_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `master_flavor_input`<sup>Optional</sup> <a name="master_flavor_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavorInput"></a>

```python
master_flavor_input: str
```

- *Type:* str

---

##### `master_lb_enabled_input`<sup>Optional</sup> <a name="master_lb_enabled_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabledInput"></a>

```python
master_lb_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_driver_input`<sup>Optional</sup> <a name="network_driver_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriverInput"></a>

```python
network_driver_input: str
```

- *Type:* str

---

##### `no_proxy_input`<sup>Optional</sup> <a name="no_proxy_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxyInput"></a>

```python
no_proxy_input: str
```

- *Type:* str

---

##### `public_input`<sup>Optional</sup> <a name="public_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.publicInput"></a>

```python
public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `registry_enabled_input`<sup>Optional</sup> <a name="registry_enabled_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabledInput"></a>

```python
registry_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_type_input`<sup>Optional</sup> <a name="server_type_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverTypeInput"></a>

```python
server_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerinfraClustertemplateV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>]

---

##### `tls_disabled_input`<sup>Optional</sup> <a name="tls_disabled_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabledInput"></a>

```python
tls_disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_driver_input`<sup>Optional</sup> <a name="volume_driver_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriverInput"></a>

```python
volume_driver_input: str
```

- *Type:* str

---

##### `apiserver_port`<sup>Required</sup> <a name="apiserver_port" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.apiserverPort"></a>

```python
apiserver_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_distro`<sup>Required</sup> <a name="cluster_distro" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.clusterDistro"></a>

```python
cluster_distro: str
```

- *Type:* str

---

##### `coe`<sup>Required</sup> <a name="coe" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.coe"></a>

```python
coe: str
```

- *Type:* str

---

##### `dns_nameserver`<sup>Required</sup> <a name="dns_nameserver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dnsNameserver"></a>

```python
dns_nameserver: str
```

- *Type:* str

---

##### `docker_storage_driver`<sup>Required</sup> <a name="docker_storage_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerStorageDriver"></a>

```python
docker_storage_driver: str
```

- *Type:* str

---

##### `docker_volume_size`<sup>Required</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `external_network_id`<sup>Required</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.externalNetworkId"></a>

```python
external_network_id: str
```

- *Type:* str

---

##### `fixed_network`<sup>Required</sup> <a name="fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedNetwork"></a>

```python
fixed_network: str
```

- *Type:* str

---

##### `fixed_subnet`<sup>Required</sup> <a name="fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.fixedSubnet"></a>

```python
fixed_subnet: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `floating_ip_enabled`<sup>Required</sup> <a name="floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.floatingIpEnabled"></a>

```python
floating_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_proxy`<sup>Required</sup> <a name="http_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

---

##### `https_proxy`<sup>Required</sup> <a name="https_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `insecure_registry`<sup>Required</sup> <a name="insecure_registry" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.insecureRegistry"></a>

```python
insecure_registry: str
```

- *Type:* str

---

##### `keypair_id`<sup>Required</sup> <a name="keypair_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.keypairId"></a>

```python
keypair_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `master_flavor`<sup>Required</sup> <a name="master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterFlavor"></a>

```python
master_flavor: str
```

- *Type:* str

---

##### `master_lb_enabled`<sup>Required</sup> <a name="master_lb_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.masterLbEnabled"></a>

```python
master_lb_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_driver`<sup>Required</sup> <a name="network_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.networkDriver"></a>

```python
network_driver: str
```

- *Type:* str

---

##### `no_proxy`<sup>Required</sup> <a name="no_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.noProxy"></a>

```python
no_proxy: str
```

- *Type:* str

---

##### `public`<sup>Required</sup> <a name="public" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.public"></a>

```python
public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `registry_enabled`<sup>Required</sup> <a name="registry_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.registryEnabled"></a>

```python
registry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_type`<sup>Required</sup> <a name="server_type" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

---

##### `tls_disabled`<sup>Required</sup> <a name="tls_disabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tlsDisabled"></a>

```python
tls_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_driver`<sup>Required</sup> <a name="volume_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.volumeDriver"></a>

```python
volume_driver: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerinfraClustertemplateV1Config <a name="ContainerinfraClustertemplateV1Config" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  coe: str,
  image: str,
  name: str,
  apiserver_port: typing.Union[int, float] = None,
  cluster_distro: str = None,
  dns_nameserver: str = None,
  docker_storage_driver: str = None,
  docker_volume_size: typing.Union[int, float] = None,
  external_network_id: str = None,
  fixed_network: str = None,
  fixed_subnet: str = None,
  flavor: str = None,
  floating_ip_enabled: typing.Union[bool, IResolvable] = None,
  hidden: typing.Union[bool, IResolvable] = None,
  http_proxy: str = None,
  https_proxy: str = None,
  id: str = None,
  insecure_registry: str = None,
  keypair_id: str = None,
  labels: typing.Mapping[str] = None,
  master_flavor: str = None,
  master_lb_enabled: typing.Union[bool, IResolvable] = None,
  network_driver: str = None,
  no_proxy: str = None,
  public: typing.Union[bool, IResolvable] = None,
  region: str = None,
  registry_enabled: typing.Union[bool, IResolvable] = None,
  server_type: str = None,
  timeouts: ContainerinfraClustertemplateV1Timeouts = None,
  tls_disabled: typing.Union[bool, IResolvable] = None,
  volume_driver: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.coe">coe</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#coe ContainerinfraClustertemplateV1#coe}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.image">image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#image ContainerinfraClustertemplateV1#image}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#name ContainerinfraClustertemplateV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.apiserverPort">apiserver_port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#apiserver_port ContainerinfraClustertemplateV1#apiserver_port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.clusterDistro">cluster_distro</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#cluster_distro ContainerinfraClustertemplateV1#cluster_distro}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dnsNameserver">dns_nameserver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#dns_nameserver ContainerinfraClustertemplateV1#dns_nameserver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerStorageDriver">docker_storage_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_storage_driver ContainerinfraClustertemplateV1#docker_storage_driver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_volume_size ContainerinfraClustertemplateV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.externalNetworkId">external_network_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#external_network_id ContainerinfraClustertemplateV1#external_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedNetwork">fixed_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_network ContainerinfraClustertemplateV1#fixed_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedSubnet">fixed_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_subnet ContainerinfraClustertemplateV1#fixed_subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#flavor ContainerinfraClustertemplateV1#flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.floatingIpEnabled">floating_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#floating_ip_enabled ContainerinfraClustertemplateV1#floating_ip_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.hidden">hidden</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#hidden ContainerinfraClustertemplateV1#hidden}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpProxy">http_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#http_proxy ContainerinfraClustertemplateV1#http_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpsProxy">https_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#https_proxy ContainerinfraClustertemplateV1#https_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#id ContainerinfraClustertemplateV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.insecureRegistry">insecure_registry</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#insecure_registry ContainerinfraClustertemplateV1#insecure_registry}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.keypairId">keypair_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#keypair_id ContainerinfraClustertemplateV1#keypair_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#labels ContainerinfraClustertemplateV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterFlavor">master_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_flavor ContainerinfraClustertemplateV1#master_flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterLbEnabled">master_lb_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_lb_enabled ContainerinfraClustertemplateV1#master_lb_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.networkDriver">network_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#network_driver ContainerinfraClustertemplateV1#network_driver}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.noProxy">no_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#no_proxy ContainerinfraClustertemplateV1#no_proxy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.public">public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#public ContainerinfraClustertemplateV1#public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#region ContainerinfraClustertemplateV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.registryEnabled">registry_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#registry_enabled ContainerinfraClustertemplateV1#registry_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.serverType">server_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#server_type ContainerinfraClustertemplateV1#server_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.tlsDisabled">tls_disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#tls_disabled ContainerinfraClustertemplateV1#tls_disabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.volumeDriver">volume_driver</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#volume_driver ContainerinfraClustertemplateV1#volume_driver}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `coe`<sup>Required</sup> <a name="coe" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.coe"></a>

```python
coe: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#coe ContainerinfraClustertemplateV1#coe}.

---

##### `image`<sup>Required</sup> <a name="image" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.image"></a>

```python
image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#image ContainerinfraClustertemplateV1#image}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#name ContainerinfraClustertemplateV1#name}.

---

##### `apiserver_port`<sup>Optional</sup> <a name="apiserver_port" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.apiserverPort"></a>

```python
apiserver_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#apiserver_port ContainerinfraClustertemplateV1#apiserver_port}.

---

##### `cluster_distro`<sup>Optional</sup> <a name="cluster_distro" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.clusterDistro"></a>

```python
cluster_distro: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#cluster_distro ContainerinfraClustertemplateV1#cluster_distro}.

---

##### `dns_nameserver`<sup>Optional</sup> <a name="dns_nameserver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dnsNameserver"></a>

```python
dns_nameserver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#dns_nameserver ContainerinfraClustertemplateV1#dns_nameserver}.

---

##### `docker_storage_driver`<sup>Optional</sup> <a name="docker_storage_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerStorageDriver"></a>

```python
docker_storage_driver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_storage_driver ContainerinfraClustertemplateV1#docker_storage_driver}.

---

##### `docker_volume_size`<sup>Optional</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#docker_volume_size ContainerinfraClustertemplateV1#docker_volume_size}.

---

##### `external_network_id`<sup>Optional</sup> <a name="external_network_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.externalNetworkId"></a>

```python
external_network_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#external_network_id ContainerinfraClustertemplateV1#external_network_id}.

---

##### `fixed_network`<sup>Optional</sup> <a name="fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedNetwork"></a>

```python
fixed_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_network ContainerinfraClustertemplateV1#fixed_network}.

---

##### `fixed_subnet`<sup>Optional</sup> <a name="fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.fixedSubnet"></a>

```python
fixed_subnet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#fixed_subnet ContainerinfraClustertemplateV1#fixed_subnet}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#flavor ContainerinfraClustertemplateV1#flavor}.

---

##### `floating_ip_enabled`<sup>Optional</sup> <a name="floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.floatingIpEnabled"></a>

```python
floating_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#floating_ip_enabled ContainerinfraClustertemplateV1#floating_ip_enabled}.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.hidden"></a>

```python
hidden: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#hidden ContainerinfraClustertemplateV1#hidden}.

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#http_proxy ContainerinfraClustertemplateV1#http_proxy}.

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#https_proxy ContainerinfraClustertemplateV1#https_proxy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#id ContainerinfraClustertemplateV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insecure_registry`<sup>Optional</sup> <a name="insecure_registry" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.insecureRegistry"></a>

```python
insecure_registry: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#insecure_registry ContainerinfraClustertemplateV1#insecure_registry}.

---

##### `keypair_id`<sup>Optional</sup> <a name="keypair_id" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.keypairId"></a>

```python
keypair_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#keypair_id ContainerinfraClustertemplateV1#keypair_id}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#labels ContainerinfraClustertemplateV1#labels}.

---

##### `master_flavor`<sup>Optional</sup> <a name="master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterFlavor"></a>

```python
master_flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_flavor ContainerinfraClustertemplateV1#master_flavor}.

---

##### `master_lb_enabled`<sup>Optional</sup> <a name="master_lb_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.masterLbEnabled"></a>

```python
master_lb_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#master_lb_enabled ContainerinfraClustertemplateV1#master_lb_enabled}.

---

##### `network_driver`<sup>Optional</sup> <a name="network_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.networkDriver"></a>

```python
network_driver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#network_driver ContainerinfraClustertemplateV1#network_driver}.

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.noProxy"></a>

```python
no_proxy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#no_proxy ContainerinfraClustertemplateV1#no_proxy}.

---

##### `public`<sup>Optional</sup> <a name="public" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.public"></a>

```python
public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#public ContainerinfraClustertemplateV1#public}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#region ContainerinfraClustertemplateV1#region}.

---

##### `registry_enabled`<sup>Optional</sup> <a name="registry_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.registryEnabled"></a>

```python
registry_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#registry_enabled ContainerinfraClustertemplateV1#registry_enabled}.

---

##### `server_type`<sup>Optional</sup> <a name="server_type" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.serverType"></a>

```python
server_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#server_type ContainerinfraClustertemplateV1#server_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.timeouts"></a>

```python
timeouts: ContainerinfraClustertemplateV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#timeouts ContainerinfraClustertemplateV1#timeouts}

---

##### `tls_disabled`<sup>Optional</sup> <a name="tls_disabled" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.tlsDisabled"></a>

```python
tls_disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#tls_disabled ContainerinfraClustertemplateV1#tls_disabled}.

---

##### `volume_driver`<sup>Optional</sup> <a name="volume_driver" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Config.property.volumeDriver"></a>

```python
volume_driver: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#volume_driver ContainerinfraClustertemplateV1#volume_driver}.

---

### ContainerinfraClustertemplateV1Timeouts <a name="ContainerinfraClustertemplateV1Timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#create ContainerinfraClustertemplateV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#delete ContainerinfraClustertemplateV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#create ContainerinfraClustertemplateV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_clustertemplate_v1#delete ContainerinfraClustertemplateV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerinfraClustertemplateV1TimeoutsOutputReference <a name="ContainerinfraClustertemplateV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_clustertemplate_v1

containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerinfraClustertemplateV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClustertemplateV1.ContainerinfraClustertemplateV1Timeouts">ContainerinfraClustertemplateV1Timeouts</a>]

---




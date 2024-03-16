# `computeInstanceV2` Submodule <a name="`computeInstanceV2` Submodule" id="@ithings/cdktf-provider-openstack.computeInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceV2 <a name="ComputeInstanceV2" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2 openstack_compute_instance_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_ip_v4: str = None,
  access_ip_v6: str = None,
  admin_pass: str = None,
  availability_zone: str = None,
  availability_zone_hints: str = None,
  block_device: typing.Union[IResolvable, typing.List[ComputeInstanceV2BlockDevice]] = None,
  config_drive: typing.Union[bool, IResolvable] = None,
  flavor_id: str = None,
  flavor_name: str = None,
  floating_ip: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_id: str = None,
  image_name: str = None,
  key_pair: str = None,
  metadata: typing.Mapping[str] = None,
  network: typing.Union[IResolvable, typing.List[ComputeInstanceV2Network]] = None,
  network_mode: str = None,
  personality: typing.Union[IResolvable, typing.List[ComputeInstanceV2Personality]] = None,
  power_state: str = None,
  region: str = None,
  scheduler_hints: typing.Union[IResolvable, typing.List[ComputeInstanceV2SchedulerHints]] = None,
  security_groups: typing.List[str] = None,
  stop_before_destroy: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeInstanceV2Timeouts = None,
  user_data: str = None,
  vendor_options: ComputeInstanceV2VendorOptions = None,
  volume: typing.Union[IResolvable, typing.List[ComputeInstanceV2Volume]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.accessIpV4">access_ip_v4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.accessIpV6">access_ip_v6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.adminPass">admin_pass</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.availabilityZoneHints">availability_zone_hints</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone_hints ComputeInstanceV2#availability_zone_hints}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.blockDevice">block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]</code> | block_device block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.configDrive">config_drive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.flavorName">flavor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.floatingIp">floating_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#force_delete ComputeInstanceV2#force_delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_id ComputeInstanceV2#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_name ComputeInstanceV2#image_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#metadata ComputeInstanceV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.networkMode">network_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network_mode ComputeInstanceV2#network_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.personality">personality</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]</code> | personality block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.powerState">power_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#power_state ComputeInstanceV2#power_state}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#region ComputeInstanceV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.schedulerHints">scheduler_hints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]</code> | scheduler_hints block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.stopBeforeDestroy">stop_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#tags ComputeInstanceV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#user_data ComputeInstanceV2#user_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.vendorOptions">vendor_options</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a></code> | vendor_options block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]</code> | volume block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}.

---

##### `access_ip_v4`<sup>Optional</sup> <a name="access_ip_v4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.accessIpV4"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}.

---

##### `access_ip_v6`<sup>Optional</sup> <a name="access_ip_v6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.accessIpV6"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}.

---

##### `admin_pass`<sup>Optional</sup> <a name="admin_pass" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.adminPass"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}.

---

##### `availability_zone_hints`<sup>Optional</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.availabilityZoneHints"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone_hints ComputeInstanceV2#availability_zone_hints}.

---

##### `block_device`<sup>Optional</sup> <a name="block_device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.blockDevice"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]

block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#block_device ComputeInstanceV2#block_device}

---

##### `config_drive`<sup>Optional</sup> <a name="config_drive" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.configDrive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}.

---

##### `flavor_name`<sup>Optional</sup> <a name="flavor_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.flavorName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}.

---

##### `floating_ip`<sup>Optional</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.floatingIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#force_delete ComputeInstanceV2#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_id ComputeInstanceV2#image_id}.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.imageName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_name ComputeInstanceV2#image_name}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.keyPair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#metadata ComputeInstanceV2#metadata}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.network"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network ComputeInstanceV2#network}

---

##### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.networkMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network_mode ComputeInstanceV2#network_mode}.

---

##### `personality`<sup>Optional</sup> <a name="personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.personality"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]

personality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#personality ComputeInstanceV2#personality}

---

##### `power_state`<sup>Optional</sup> <a name="power_state" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.powerState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#power_state ComputeInstanceV2#power_state}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#region ComputeInstanceV2#region}.

---

##### `scheduler_hints`<sup>Optional</sup> <a name="scheduler_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.schedulerHints"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]

scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#scheduler_hints ComputeInstanceV2#scheduler_hints}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}.

---

##### `stop_before_destroy`<sup>Optional</sup> <a name="stop_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.stopBeforeDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#tags ComputeInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#timeouts ComputeInstanceV2#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.userData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#user_data ComputeInstanceV2#user_data}.

---

##### `vendor_options`<sup>Optional</sup> <a name="vendor_options" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.vendorOptions"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

vendor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#vendor_options ComputeInstanceV2#vendor_options}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.volume"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume ComputeInstanceV2#volume}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putBlockDevice">put_block_device</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putPersonality">put_personality</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putSchedulerHints">put_scheduler_hints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVendorOptions">put_vendor_options</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVolume">put_volume</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV4">reset_access_ip_v4</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV6">reset_access_ip_v6</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAdminPass">reset_admin_pass</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZoneHints">reset_availability_zone_hints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetBlockDevice">reset_block_device</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetConfigDrive">reset_config_drive</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorName">reset_flavor_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFloatingIp">reset_floating_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageName">reset_image_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetKeyPair">reset_key_pair</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetworkMode">reset_network_mode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPersonality">reset_personality</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPowerState">reset_power_state</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSchedulerHints">reset_scheduler_hints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetStopBeforeDestroy">reset_stop_before_destroy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetUserData">reset_user_data</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVendorOptions">reset_vendor_options</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVolume">reset_volume</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_block_device` <a name="put_block_device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putBlockDevice"></a>

```python
def put_block_device(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceV2BlockDevice]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putBlockDevice.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]

---

##### `put_network` <a name="put_network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putNetwork"></a>

```python
def put_network(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceV2Network]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putNetwork.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]

---

##### `put_personality` <a name="put_personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putPersonality"></a>

```python
def put_personality(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceV2Personality]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putPersonality.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]

---

##### `put_scheduler_hints` <a name="put_scheduler_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putSchedulerHints"></a>

```python
def put_scheduler_hints(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceV2SchedulerHints]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putSchedulerHints.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#create ComputeInstanceV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete ComputeInstanceV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#update ComputeInstanceV2#update}.

---

##### `put_vendor_options` <a name="put_vendor_options" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVendorOptions"></a>

```python
def put_vendor_options(
  detach_ports_before_destroy: typing.Union[bool, IResolvable] = None,
  ignore_resize_confirmation: typing.Union[bool, IResolvable] = None
) -> None
```

###### `detach_ports_before_destroy`<sup>Optional</sup> <a name="detach_ports_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVendorOptions.parameter.detachPortsBeforeDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#detach_ports_before_destroy ComputeInstanceV2#detach_ports_before_destroy}.

---

###### `ignore_resize_confirmation`<sup>Optional</sup> <a name="ignore_resize_confirmation" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVendorOptions.parameter.ignoreResizeConfirmation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#ignore_resize_confirmation ComputeInstanceV2#ignore_resize_confirmation}.

---

##### `put_volume` <a name="put_volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVolume"></a>

```python
def put_volume(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceV2Volume]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVolume.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]

---

##### `reset_access_ip_v4` <a name="reset_access_ip_v4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV4"></a>

```python
def reset_access_ip_v4() -> None
```

##### `reset_access_ip_v6` <a name="reset_access_ip_v6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV6"></a>

```python
def reset_access_ip_v6() -> None
```

##### `reset_admin_pass` <a name="reset_admin_pass" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAdminPass"></a>

```python
def reset_admin_pass() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_availability_zone_hints` <a name="reset_availability_zone_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZoneHints"></a>

```python
def reset_availability_zone_hints() -> None
```

##### `reset_block_device` <a name="reset_block_device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetBlockDevice"></a>

```python
def reset_block_device() -> None
```

##### `reset_config_drive` <a name="reset_config_drive" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetConfigDrive"></a>

```python
def reset_config_drive() -> None
```

##### `reset_flavor_id` <a name="reset_flavor_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_flavor_name` <a name="reset_flavor_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorName"></a>

```python
def reset_flavor_name() -> None
```

##### `reset_floating_ip` <a name="reset_floating_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFloatingIp"></a>

```python
def reset_floating_ip() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_image_name` <a name="reset_image_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageName"></a>

```python
def reset_image_name() -> None
```

##### `reset_key_pair` <a name="reset_key_pair" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetKeyPair"></a>

```python
def reset_key_pair() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_network` <a name="reset_network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_network_mode` <a name="reset_network_mode" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetworkMode"></a>

```python
def reset_network_mode() -> None
```

##### `reset_personality` <a name="reset_personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPersonality"></a>

```python
def reset_personality() -> None
```

##### `reset_power_state` <a name="reset_power_state" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPowerState"></a>

```python
def reset_power_state() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_scheduler_hints` <a name="reset_scheduler_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSchedulerHints"></a>

```python
def reset_scheduler_hints() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_stop_before_destroy` <a name="reset_stop_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetStopBeforeDestroy"></a>

```python
def reset_stop_before_destroy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetUserData"></a>

```python
def reset_user_data() -> None
```

##### `reset_vendor_options` <a name="reset_vendor_options" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVendorOptions"></a>

```python
def reset_vendor_options() -> None
```

##### `reset_volume` <a name="reset_volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVolume"></a>

```python
def reset_volume() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInstanceV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allMetadata">all_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allTags">all_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDevice">block_device</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList">ComputeInstanceV2BlockDeviceList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.created">created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.network">network</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList">ComputeInstanceV2NetworkList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personality">personality</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList">ComputeInstanceV2PersonalityList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHints">scheduler_hints</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList">ComputeInstanceV2SchedulerHintsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference">ComputeInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.updated">updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptions">vendor_options</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference">ComputeInstanceV2VendorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volume">volume</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList">ComputeInstanceV2VolumeList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4Input">access_ip_v4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6Input">access_ip_v6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPassInput">admin_pass_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHintsInput">availability_zone_hints_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDeviceInput">block_device_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDriveInput">config_drive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorNameInput">flavor_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIpInput">floating_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageNameInput">image_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPairInput">key_pair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkInput">network_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkModeInput">network_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personalityInput">personality_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerStateInput">power_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHintsInput">scheduler_hints_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroyInput">stop_before_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptionsInput">vendor_options_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volumeInput">volume_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4">access_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6">access_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPass">admin_pass</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHints">availability_zone_hints</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDrive">config_drive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorName">flavor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIp">floating_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPair">key_pair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkMode">network_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerState">power_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroy">stop_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userData">user_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `all_metadata`<sup>Required</sup> <a name="all_metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allMetadata"></a>

```python
all_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `all_tags`<sup>Required</sup> <a name="all_tags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allTags"></a>

```python
all_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `block_device`<sup>Required</sup> <a name="block_device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDevice"></a>

```python
block_device: ComputeInstanceV2BlockDeviceList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList">ComputeInstanceV2BlockDeviceList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.created"></a>

```python
created: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.network"></a>

```python
network: ComputeInstanceV2NetworkList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList">ComputeInstanceV2NetworkList</a>

---

##### `personality`<sup>Required</sup> <a name="personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personality"></a>

```python
personality: ComputeInstanceV2PersonalityList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList">ComputeInstanceV2PersonalityList</a>

---

##### `scheduler_hints`<sup>Required</sup> <a name="scheduler_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHints"></a>

```python
scheduler_hints: ComputeInstanceV2SchedulerHintsList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList">ComputeInstanceV2SchedulerHintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeouts"></a>

```python
timeouts: ComputeInstanceV2TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference">ComputeInstanceV2TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.updated"></a>

```python
updated: str
```

- *Type:* str

---

##### `vendor_options`<sup>Required</sup> <a name="vendor_options" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptions"></a>

```python
vendor_options: ComputeInstanceV2VendorOptionsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference">ComputeInstanceV2VendorOptionsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volume"></a>

```python
volume: ComputeInstanceV2VolumeList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList">ComputeInstanceV2VolumeList</a>

---

##### `access_ip_v4_input`<sup>Optional</sup> <a name="access_ip_v4_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4Input"></a>

```python
access_ip_v4_input: str
```

- *Type:* str

---

##### `access_ip_v6_input`<sup>Optional</sup> <a name="access_ip_v6_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6Input"></a>

```python
access_ip_v6_input: str
```

- *Type:* str

---

##### `admin_pass_input`<sup>Optional</sup> <a name="admin_pass_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPassInput"></a>

```python
admin_pass_input: str
```

- *Type:* str

---

##### `availability_zone_hints_input`<sup>Optional</sup> <a name="availability_zone_hints_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHintsInput"></a>

```python
availability_zone_hints_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `block_device_input`<sup>Optional</sup> <a name="block_device_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDeviceInput"></a>

```python
block_device_input: typing.Union[IResolvable, typing.List[ComputeInstanceV2BlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]

---

##### `config_drive_input`<sup>Optional</sup> <a name="config_drive_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDriveInput"></a>

```python
config_drive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `flavor_name_input`<sup>Optional</sup> <a name="flavor_name_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorNameInput"></a>

```python
flavor_name_input: str
```

- *Type:* str

---

##### `floating_ip_input`<sup>Optional</sup> <a name="floating_ip_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIpInput"></a>

```python
floating_ip_input: str
```

- *Type:* str

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `image_name_input`<sup>Optional</sup> <a name="image_name_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageNameInput"></a>

```python
image_name_input: str
```

- *Type:* str

---

##### `key_pair_input`<sup>Optional</sup> <a name="key_pair_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPairInput"></a>

```python
key_pair_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkInput"></a>

```python
network_input: typing.Union[IResolvable, typing.List[ComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]

---

##### `network_mode_input`<sup>Optional</sup> <a name="network_mode_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkModeInput"></a>

```python
network_mode_input: str
```

- *Type:* str

---

##### `personality_input`<sup>Optional</sup> <a name="personality_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personalityInput"></a>

```python
personality_input: typing.Union[IResolvable, typing.List[ComputeInstanceV2Personality]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]

---

##### `power_state_input`<sup>Optional</sup> <a name="power_state_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerStateInput"></a>

```python
power_state_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scheduler_hints_input`<sup>Optional</sup> <a name="scheduler_hints_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHintsInput"></a>

```python
scheduler_hints_input: typing.Union[IResolvable, typing.List[ComputeInstanceV2SchedulerHints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stop_before_destroy_input`<sup>Optional</sup> <a name="stop_before_destroy_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroyInput"></a>

```python
stop_before_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeInstanceV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `vendor_options_input`<sup>Optional</sup> <a name="vendor_options_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptionsInput"></a>

```python
vendor_options_input: ComputeInstanceV2VendorOptions
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volumeInput"></a>

```python
volume_input: typing.Union[IResolvable, typing.List[ComputeInstanceV2Volume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]

---

##### `access_ip_v4`<sup>Required</sup> <a name="access_ip_v4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4"></a>

```python
access_ip_v4: str
```

- *Type:* str

---

##### `access_ip_v6`<sup>Required</sup> <a name="access_ip_v6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6"></a>

```python
access_ip_v6: str
```

- *Type:* str

---

##### `admin_pass`<sup>Required</sup> <a name="admin_pass" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPass"></a>

```python
admin_pass: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_hints`<sup>Required</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHints"></a>

```python
availability_zone_hints: str
```

- *Type:* str

---

##### `config_drive`<sup>Required</sup> <a name="config_drive" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDrive"></a>

```python
config_drive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `flavor_name`<sup>Required</sup> <a name="flavor_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorName"></a>

```python
flavor_name: str
```

- *Type:* str

---

##### `floating_ip`<sup>Required</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIp"></a>

```python
floating_ip: str
```

- *Type:* str

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `key_pair`<sup>Required</sup> <a name="key_pair" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_mode`<sup>Required</sup> <a name="network_mode" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

---

##### `power_state`<sup>Required</sup> <a name="power_state" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stop_before_destroy`<sup>Required</sup> <a name="stop_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroy"></a>

```python
stop_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceV2BlockDevice <a name="ComputeInstanceV2BlockDevice" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2BlockDevice(
  source_type: str,
  boot_index: typing.Union[int, float] = None,
  delete_on_termination: typing.Union[bool, IResolvable] = None,
  destination_type: str = None,
  device_type: str = None,
  disk_bus: str = None,
  guest_format: str = None,
  multiattach: typing.Union[bool, IResolvable] = None,
  uuid: str = None,
  volume_size: typing.Union[int, float] = None,
  volume_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#source_type ComputeInstanceV2#source_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.bootIndex">boot_index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.destinationType">destination_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deviceType">device_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device_type ComputeInstanceV2#device_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.diskBus">disk_bus</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#disk_bus ComputeInstanceV2#disk_bus}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.guestFormat">guest_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.multiattach">multiattach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#multiattach ComputeInstanceV2#multiattach}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.uuid">uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeType">volume_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}. |

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#source_type ComputeInstanceV2#source_type}.

---

##### `boot_index`<sup>Optional</sup> <a name="boot_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.bootIndex"></a>

```python
boot_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}.

---

##### `delete_on_termination`<sup>Optional</sup> <a name="delete_on_termination" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}.

---

##### `destination_type`<sup>Optional</sup> <a name="destination_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}.

---

##### `device_type`<sup>Optional</sup> <a name="device_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device_type ComputeInstanceV2#device_type}.

---

##### `disk_bus`<sup>Optional</sup> <a name="disk_bus" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.diskBus"></a>

```python
disk_bus: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#disk_bus ComputeInstanceV2#disk_bus}.

---

##### `guest_format`<sup>Optional</sup> <a name="guest_format" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.guestFormat"></a>

```python
guest_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}.

---

##### `multiattach`<sup>Optional</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.multiattach"></a>

```python
multiattach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#multiattach ComputeInstanceV2#multiattach}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}.

---

##### `volume_size`<sup>Optional</sup> <a name="volume_size" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}.

---

##### `volume_type`<sup>Optional</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}.

---

### ComputeInstanceV2Config <a name="ComputeInstanceV2Config" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  access_ip_v4: str = None,
  access_ip_v6: str = None,
  admin_pass: str = None,
  availability_zone: str = None,
  availability_zone_hints: str = None,
  block_device: typing.Union[IResolvable, typing.List[ComputeInstanceV2BlockDevice]] = None,
  config_drive: typing.Union[bool, IResolvable] = None,
  flavor_id: str = None,
  flavor_name: str = None,
  floating_ip: str = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  id: str = None,
  image_id: str = None,
  image_name: str = None,
  key_pair: str = None,
  metadata: typing.Mapping[str] = None,
  network: typing.Union[IResolvable, typing.List[ComputeInstanceV2Network]] = None,
  network_mode: str = None,
  personality: typing.Union[IResolvable, typing.List[ComputeInstanceV2Personality]] = None,
  power_state: str = None,
  region: str = None,
  scheduler_hints: typing.Union[IResolvable, typing.List[ComputeInstanceV2SchedulerHints]] = None,
  security_groups: typing.List[str] = None,
  stop_before_destroy: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeInstanceV2Timeouts = None,
  user_data: str = None,
  vendor_options: ComputeInstanceV2VendorOptions = None,
  volume: typing.Union[IResolvable, typing.List[ComputeInstanceV2Volume]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV4">access_ip_v4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV6">access_ip_v6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.adminPass">admin_pass</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZoneHints">availability_zone_hints</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone_hints ComputeInstanceV2#availability_zone_hints}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.blockDevice">block_device</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]</code> | block_device block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.configDrive">config_drive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorName">flavor_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.floatingIp">floating_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#force_delete ComputeInstanceV2#force_delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_id ComputeInstanceV2#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageName">image_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_name ComputeInstanceV2#image_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.keyPair">key_pair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#metadata ComputeInstanceV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.networkMode">network_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network_mode ComputeInstanceV2#network_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.personality">personality</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]</code> | personality block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.powerState">power_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#power_state ComputeInstanceV2#power_state}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#region ComputeInstanceV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.schedulerHints">scheduler_hints</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]</code> | scheduler_hints block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.stopBeforeDestroy">stop_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#tags ComputeInstanceV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.userData">user_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#user_data ComputeInstanceV2#user_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.vendorOptions">vendor_options</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a></code> | vendor_options block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.volume">volume</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]</code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}.

---

##### `access_ip_v4`<sup>Optional</sup> <a name="access_ip_v4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV4"></a>

```python
access_ip_v4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}.

---

##### `access_ip_v6`<sup>Optional</sup> <a name="access_ip_v6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV6"></a>

```python
access_ip_v6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}.

---

##### `admin_pass`<sup>Optional</sup> <a name="admin_pass" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.adminPass"></a>

```python
admin_pass: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}.

---

##### `availability_zone_hints`<sup>Optional</sup> <a name="availability_zone_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZoneHints"></a>

```python
availability_zone_hints: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone_hints ComputeInstanceV2#availability_zone_hints}.

---

##### `block_device`<sup>Optional</sup> <a name="block_device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.blockDevice"></a>

```python
block_device: typing.Union[IResolvable, typing.List[ComputeInstanceV2BlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]

block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#block_device ComputeInstanceV2#block_device}

---

##### `config_drive`<sup>Optional</sup> <a name="config_drive" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.configDrive"></a>

```python
config_drive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}.

---

##### `flavor_name`<sup>Optional</sup> <a name="flavor_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorName"></a>

```python
flavor_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}.

---

##### `floating_ip`<sup>Optional</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.floatingIp"></a>

```python
floating_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#force_delete ComputeInstanceV2#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_id ComputeInstanceV2#image_id}.

---

##### `image_name`<sup>Optional</sup> <a name="image_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_name ComputeInstanceV2#image_name}.

---

##### `key_pair`<sup>Optional</sup> <a name="key_pair" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.keyPair"></a>

```python
key_pair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#metadata ComputeInstanceV2#metadata}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.network"></a>

```python
network: typing.Union[IResolvable, typing.List[ComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network ComputeInstanceV2#network}

---

##### `network_mode`<sup>Optional</sup> <a name="network_mode" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.networkMode"></a>

```python
network_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network_mode ComputeInstanceV2#network_mode}.

---

##### `personality`<sup>Optional</sup> <a name="personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.personality"></a>

```python
personality: typing.Union[IResolvable, typing.List[ComputeInstanceV2Personality]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]

personality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#personality ComputeInstanceV2#personality}

---

##### `power_state`<sup>Optional</sup> <a name="power_state" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.powerState"></a>

```python
power_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#power_state ComputeInstanceV2#power_state}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#region ComputeInstanceV2#region}.

---

##### `scheduler_hints`<sup>Optional</sup> <a name="scheduler_hints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.schedulerHints"></a>

```python
scheduler_hints: typing.Union[IResolvable, typing.List[ComputeInstanceV2SchedulerHints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]

scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#scheduler_hints ComputeInstanceV2#scheduler_hints}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}.

---

##### `stop_before_destroy`<sup>Optional</sup> <a name="stop_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.stopBeforeDestroy"></a>

```python
stop_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#tags ComputeInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.timeouts"></a>

```python
timeouts: ComputeInstanceV2Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#timeouts ComputeInstanceV2#timeouts}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.userData"></a>

```python
user_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#user_data ComputeInstanceV2#user_data}.

---

##### `vendor_options`<sup>Optional</sup> <a name="vendor_options" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.vendorOptions"></a>

```python
vendor_options: ComputeInstanceV2VendorOptions
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

vendor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#vendor_options ComputeInstanceV2#vendor_options}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.volume"></a>

```python
volume: typing.Union[IResolvable, typing.List[ComputeInstanceV2Volume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume ComputeInstanceV2#volume}

---

### ComputeInstanceV2Network <a name="ComputeInstanceV2Network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2Network(
  access_network: typing.Union[bool, IResolvable] = None,
  fixed_ip_v4: str = None,
  fixed_ip_v6: str = None,
  floating_ip: str = None,
  name: str = None,
  port: str = None,
  uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.accessNetwork">access_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_network ComputeInstanceV2#access_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV4">fixed_ip_v4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV6">fixed_ip_v6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.floatingIp">floating_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#port ComputeInstanceV2#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.uuid">uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}. |

---

##### `access_network`<sup>Optional</sup> <a name="access_network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.accessNetwork"></a>

```python
access_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_network ComputeInstanceV2#access_network}.

---

##### `fixed_ip_v4`<sup>Optional</sup> <a name="fixed_ip_v4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV4"></a>

```python
fixed_ip_v4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}.

---

##### `fixed_ip_v6`<sup>Optional</sup> <a name="fixed_ip_v6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV6"></a>

```python
fixed_ip_v6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}.

---

##### `floating_ip`<sup>Optional</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.floatingIp"></a>

```python
floating_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#port ComputeInstanceV2#port}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}.

---

### ComputeInstanceV2Personality <a name="ComputeInstanceV2Personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2Personality(
  content: str,
  file: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.content">content</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#content ComputeInstanceV2#content}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.file">file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#file ComputeInstanceV2#file}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.content"></a>

```python
content: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#content ComputeInstanceV2#content}.

---

##### `file`<sup>Required</sup> <a name="file" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.file"></a>

```python
file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#file ComputeInstanceV2#file}.

---

### ComputeInstanceV2SchedulerHints <a name="ComputeInstanceV2SchedulerHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2SchedulerHints(
  additional_properties: typing.Mapping[str] = None,
  build_near_host_ip: str = None,
  different_cell: typing.List[str] = None,
  different_host: typing.List[str] = None,
  group: str = None,
  query: typing.List[str] = None,
  same_host: typing.List[str] = None,
  target_cell: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#additional_properties ComputeInstanceV2#additional_properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.buildNearHostIp">build_near_host_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentCell">different_cell</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_cell ComputeInstanceV2#different_cell}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentHost">different_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_host ComputeInstanceV2#different_host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.group">group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#group ComputeInstanceV2#group}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.query">query</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#query ComputeInstanceV2#query}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.sameHost">same_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#same_host ComputeInstanceV2#same_host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.targetCell">target_cell</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}. |

---

##### `additional_properties`<sup>Optional</sup> <a name="additional_properties" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#additional_properties ComputeInstanceV2#additional_properties}.

---

##### `build_near_host_ip`<sup>Optional</sup> <a name="build_near_host_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.buildNearHostIp"></a>

```python
build_near_host_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}.

---

##### `different_cell`<sup>Optional</sup> <a name="different_cell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentCell"></a>

```python
different_cell: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_cell ComputeInstanceV2#different_cell}.

---

##### `different_host`<sup>Optional</sup> <a name="different_host" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentHost"></a>

```python
different_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_host ComputeInstanceV2#different_host}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.group"></a>

```python
group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#group ComputeInstanceV2#group}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.query"></a>

```python
query: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#query ComputeInstanceV2#query}.

---

##### `same_host`<sup>Optional</sup> <a name="same_host" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.sameHost"></a>

```python
same_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#same_host ComputeInstanceV2#same_host}.

---

##### `target_cell`<sup>Optional</sup> <a name="target_cell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.targetCell"></a>

```python
target_cell: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}.

---

### ComputeInstanceV2Timeouts <a name="ComputeInstanceV2Timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#create ComputeInstanceV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete ComputeInstanceV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#update ComputeInstanceV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#create ComputeInstanceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete ComputeInstanceV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#update ComputeInstanceV2#update}.

---

### ComputeInstanceV2VendorOptions <a name="ComputeInstanceV2VendorOptions" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2VendorOptions(
  detach_ports_before_destroy: typing.Union[bool, IResolvable] = None,
  ignore_resize_confirmation: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.detachPortsBeforeDestroy">detach_ports_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#detach_ports_before_destroy ComputeInstanceV2#detach_ports_before_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.ignoreResizeConfirmation">ignore_resize_confirmation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#ignore_resize_confirmation ComputeInstanceV2#ignore_resize_confirmation}. |

---

##### `detach_ports_before_destroy`<sup>Optional</sup> <a name="detach_ports_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.detachPortsBeforeDestroy"></a>

```python
detach_ports_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#detach_ports_before_destroy ComputeInstanceV2#detach_ports_before_destroy}.

---

##### `ignore_resize_confirmation`<sup>Optional</sup> <a name="ignore_resize_confirmation" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.ignoreResizeConfirmation"></a>

```python
ignore_resize_confirmation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#ignore_resize_confirmation ComputeInstanceV2#ignore_resize_confirmation}.

---

### ComputeInstanceV2Volume <a name="ComputeInstanceV2Volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2Volume(
  volume_id: str,
  device: str = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.volumeId">volume_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_id ComputeInstanceV2#volume_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.device">device</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device ComputeInstanceV2#device}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}. |

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_id ComputeInstanceV2#volume_id}.

---

##### `device`<sup>Optional</sup> <a name="device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.device"></a>

```python
device: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device ComputeInstanceV2#device}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceV2BlockDeviceList <a name="ComputeInstanceV2BlockDeviceList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2BlockDeviceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceV2BlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceV2BlockDevice]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]]

---


### ComputeInstanceV2BlockDeviceOutputReference <a name="ComputeInstanceV2BlockDeviceOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetBootIndex">reset_boot_index</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeleteOnTermination">reset_delete_on_termination</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDestinationType">reset_destination_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeviceType">reset_device_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDiskBus">reset_disk_bus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetGuestFormat">reset_guest_format</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetMultiattach">reset_multiattach</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeSize">reset_volume_size</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeType">reset_volume_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_boot_index` <a name="reset_boot_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetBootIndex"></a>

```python
def reset_boot_index() -> None
```

##### `reset_delete_on_termination` <a name="reset_delete_on_termination" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeleteOnTermination"></a>

```python
def reset_delete_on_termination() -> None
```

##### `reset_destination_type` <a name="reset_destination_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDestinationType"></a>

```python
def reset_destination_type() -> None
```

##### `reset_device_type` <a name="reset_device_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeviceType"></a>

```python
def reset_device_type() -> None
```

##### `reset_disk_bus` <a name="reset_disk_bus" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDiskBus"></a>

```python
def reset_disk_bus() -> None
```

##### `reset_guest_format` <a name="reset_guest_format" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetGuestFormat"></a>

```python
def reset_guest_format() -> None
```

##### `reset_multiattach` <a name="reset_multiattach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetMultiattach"></a>

```python
def reset_multiattach() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```

##### `reset_volume_size` <a name="reset_volume_size" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeSize"></a>

```python
def reset_volume_size() -> None
```

##### `reset_volume_type` <a name="reset_volume_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeType"></a>

```python
def reset_volume_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndexInput">boot_index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTerminationInput">delete_on_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationTypeInput">destination_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceTypeInput">device_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBusInput">disk_bus_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormatInput">guest_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattachInput">multiattach_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSizeInput">volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeTypeInput">volume_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndex">boot_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceType">device_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBus">disk_bus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormat">guest_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattach">multiattach</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_index_input`<sup>Optional</sup> <a name="boot_index_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndexInput"></a>

```python
boot_index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_on_termination_input`<sup>Optional</sup> <a name="delete_on_termination_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```python
delete_on_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `destination_type_input`<sup>Optional</sup> <a name="destination_type_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationTypeInput"></a>

```python
destination_type_input: str
```

- *Type:* str

---

##### `device_type_input`<sup>Optional</sup> <a name="device_type_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceTypeInput"></a>

```python
device_type_input: str
```

- *Type:* str

---

##### `disk_bus_input`<sup>Optional</sup> <a name="disk_bus_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBusInput"></a>

```python
disk_bus_input: str
```

- *Type:* str

---

##### `guest_format_input`<sup>Optional</sup> <a name="guest_format_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormatInput"></a>

```python
guest_format_input: str
```

- *Type:* str

---

##### `multiattach_input`<sup>Optional</sup> <a name="multiattach_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattachInput"></a>

```python
multiattach_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `volume_size_input`<sup>Optional</sup> <a name="volume_size_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSizeInput"></a>

```python
volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type_input`<sup>Optional</sup> <a name="volume_type_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeTypeInput"></a>

```python
volume_type_input: str
```

- *Type:* str

---

##### `boot_index`<sup>Required</sup> <a name="boot_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndex"></a>

```python
boot_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `device_type`<sup>Required</sup> <a name="device_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceType"></a>

```python
device_type: str
```

- *Type:* str

---

##### `disk_bus`<sup>Required</sup> <a name="disk_bus" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBus"></a>

```python
disk_bus: str
```

- *Type:* str

---

##### `guest_format`<sup>Required</sup> <a name="guest_format" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormat"></a>

```python
guest_format: str
```

- *Type:* str

---

##### `multiattach`<sup>Required</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattach"></a>

```python
multiattach: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceV2BlockDevice]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>]

---


### ComputeInstanceV2NetworkList <a name="ComputeInstanceV2NetworkList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2NetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceV2Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]]

---


### ComputeInstanceV2NetworkOutputReference <a name="ComputeInstanceV2NetworkOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2NetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetAccessNetwork">reset_access_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV4">reset_fixed_ip_v4</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV6">reset_fixed_ip_v6</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFloatingIp">reset_floating_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_network` <a name="reset_access_network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetAccessNetwork"></a>

```python
def reset_access_network() -> None
```

##### `reset_fixed_ip_v4` <a name="reset_fixed_ip_v4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV4"></a>

```python
def reset_fixed_ip_v4() -> None
```

##### `reset_fixed_ip_v6` <a name="reset_fixed_ip_v6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV6"></a>

```python
def reset_fixed_ip_v6() -> None
```

##### `reset_floating_ip` <a name="reset_floating_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFloatingIp"></a>

```python
def reset_floating_ip() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_port` <a name="reset_port" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.mac">mac</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetworkInput">access_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4Input">fixed_ip_v4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6Input">fixed_ip_v6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIpInput">floating_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetwork">access_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4">fixed_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6">fixed_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIp">floating_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mac`<sup>Required</sup> <a name="mac" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.mac"></a>

```python
mac: str
```

- *Type:* str

---

##### `access_network_input`<sup>Optional</sup> <a name="access_network_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetworkInput"></a>

```python
access_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fixed_ip_v4_input`<sup>Optional</sup> <a name="fixed_ip_v4_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4Input"></a>

```python
fixed_ip_v4_input: str
```

- *Type:* str

---

##### `fixed_ip_v6_input`<sup>Optional</sup> <a name="fixed_ip_v6_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6Input"></a>

```python
fixed_ip_v6_input: str
```

- *Type:* str

---

##### `floating_ip_input`<sup>Optional</sup> <a name="floating_ip_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIpInput"></a>

```python
floating_ip_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `access_network`<sup>Required</sup> <a name="access_network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetwork"></a>

```python
access_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `fixed_ip_v4`<sup>Required</sup> <a name="fixed_ip_v4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4"></a>

```python
fixed_ip_v4: str
```

- *Type:* str

---

##### `fixed_ip_v6`<sup>Required</sup> <a name="fixed_ip_v6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6"></a>

```python
fixed_ip_v6: str
```

- *Type:* str

---

##### `floating_ip`<sup>Required</sup> <a name="floating_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIp"></a>

```python
floating_ip: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceV2Network]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>]

---


### ComputeInstanceV2PersonalityList <a name="ComputeInstanceV2PersonalityList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2PersonalityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceV2PersonalityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceV2Personality]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]]

---


### ComputeInstanceV2PersonalityOutputReference <a name="ComputeInstanceV2PersonalityOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2PersonalityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceV2Personality]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>]

---


### ComputeInstanceV2SchedulerHintsList <a name="ComputeInstanceV2SchedulerHintsList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2SchedulerHintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceV2SchedulerHintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceV2SchedulerHints]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]]

---


### ComputeInstanceV2SchedulerHintsOutputReference <a name="ComputeInstanceV2SchedulerHintsOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetAdditionalProperties">reset_additional_properties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetBuildNearHostIp">reset_build_near_host_ip</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentCell">reset_different_cell</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentHost">reset_different_host</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetQuery">reset_query</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetSameHost">reset_same_host</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTargetCell">reset_target_cell</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_additional_properties` <a name="reset_additional_properties" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetAdditionalProperties"></a>

```python
def reset_additional_properties() -> None
```

##### `reset_build_near_host_ip` <a name="reset_build_near_host_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetBuildNearHostIp"></a>

```python
def reset_build_near_host_ip() -> None
```

##### `reset_different_cell` <a name="reset_different_cell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentCell"></a>

```python
def reset_different_cell() -> None
```

##### `reset_different_host` <a name="reset_different_host" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentHost"></a>

```python
def reset_different_host() -> None
```

##### `reset_group` <a name="reset_group" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_query` <a name="reset_query" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetQuery"></a>

```python
def reset_query() -> None
```

##### `reset_same_host` <a name="reset_same_host" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetSameHost"></a>

```python
def reset_same_host() -> None
```

##### `reset_target_cell` <a name="reset_target_cell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTargetCell"></a>

```python
def reset_target_cell() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalPropertiesInput">additional_properties_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIpInput">build_near_host_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCellInput">different_cell_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHostInput">different_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.queryInput">query_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHostInput">same_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCellInput">target_cell_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalProperties">additional_properties</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIp">build_near_host_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCell">different_cell</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHost">different_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.query">query</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHost">same_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCell">target_cell</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_properties_input`<sup>Optional</sup> <a name="additional_properties_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalPropertiesInput"></a>

```python
additional_properties_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_near_host_ip_input`<sup>Optional</sup> <a name="build_near_host_ip_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIpInput"></a>

```python
build_near_host_ip_input: str
```

- *Type:* str

---

##### `different_cell_input`<sup>Optional</sup> <a name="different_cell_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCellInput"></a>

```python
different_cell_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `different_host_input`<sup>Optional</sup> <a name="different_host_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHostInput"></a>

```python
different_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `query_input`<sup>Optional</sup> <a name="query_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.queryInput"></a>

```python
query_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `same_host_input`<sup>Optional</sup> <a name="same_host_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHostInput"></a>

```python
same_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_cell_input`<sup>Optional</sup> <a name="target_cell_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCellInput"></a>

```python
target_cell_input: str
```

- *Type:* str

---

##### `additional_properties`<sup>Required</sup> <a name="additional_properties" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalProperties"></a>

```python
additional_properties: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `build_near_host_ip`<sup>Required</sup> <a name="build_near_host_ip" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIp"></a>

```python
build_near_host_ip: str
```

- *Type:* str

---

##### `different_cell`<sup>Required</sup> <a name="different_cell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCell"></a>

```python
different_cell: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `different_host`<sup>Required</sup> <a name="different_host" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHost"></a>

```python
different_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group`<sup>Required</sup> <a name="group" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.query"></a>

```python
query: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `same_host`<sup>Required</sup> <a name="same_host" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHost"></a>

```python
same_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_cell`<sup>Required</sup> <a name="target_cell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCell"></a>

```python
target_cell: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceV2SchedulerHints]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>]

---


### ComputeInstanceV2TimeoutsOutputReference <a name="ComputeInstanceV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>]

---


### ComputeInstanceV2VendorOptionsOutputReference <a name="ComputeInstanceV2VendorOptionsOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetDetachPortsBeforeDestroy">reset_detach_ports_before_destroy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetIgnoreResizeConfirmation">reset_ignore_resize_confirmation</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_detach_ports_before_destroy` <a name="reset_detach_ports_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetDetachPortsBeforeDestroy"></a>

```python
def reset_detach_ports_before_destroy() -> None
```

##### `reset_ignore_resize_confirmation` <a name="reset_ignore_resize_confirmation" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetIgnoreResizeConfirmation"></a>

```python
def reset_ignore_resize_confirmation() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroyInput">detach_ports_before_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmationInput">ignore_resize_confirmation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroy">detach_ports_before_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmation">ignore_resize_confirmation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detach_ports_before_destroy_input`<sup>Optional</sup> <a name="detach_ports_before_destroy_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroyInput"></a>

```python
detach_ports_before_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_resize_confirmation_input`<sup>Optional</sup> <a name="ignore_resize_confirmation_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmationInput"></a>

```python
ignore_resize_confirmation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `detach_ports_before_destroy`<sup>Required</sup> <a name="detach_ports_before_destroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroy"></a>

```python
detach_ports_before_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ignore_resize_confirmation`<sup>Required</sup> <a name="ignore_resize_confirmation" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmation"></a>

```python
ignore_resize_confirmation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeInstanceV2VendorOptions
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

---


### ComputeInstanceV2VolumeList <a name="ComputeInstanceV2VolumeList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2VolumeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceV2VolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceV2Volume]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]]

---


### ComputeInstanceV2VolumeOutputReference <a name="ComputeInstanceV2VolumeOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_instance_v2

computeInstanceV2.ComputeInstanceV2VolumeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetDevice">reset_device</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetId">reset_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_device` <a name="reset_device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetDevice"></a>

```python
def reset_device() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetId"></a>

```python
def reset_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.deviceInput">device_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeIdInput">volume_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.device">device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_input`<sup>Optional</sup> <a name="device_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.deviceInput"></a>

```python
device_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `volume_id_input`<sup>Optional</sup> <a name="volume_id_input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeIdInput"></a>

```python
volume_id_input: str
```

- *Type:* str

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.device"></a>

```python
device: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceV2Volume]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>]

---




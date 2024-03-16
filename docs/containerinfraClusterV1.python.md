# `containerinfraClusterV1` Submodule <a name="`containerinfraClusterV1` Submodule" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerinfraClusterV1 <a name="ContainerinfraClusterV1" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1 openstack_containerinfra_cluster_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_template_id: str,
  create_timeout: typing.Union[int, float] = None,
  discovery_url: str = None,
  docker_volume_size: typing.Union[int, float] = None,
  fixed_network: str = None,
  fixed_subnet: str = None,
  flavor: str = None,
  floating_ip_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  keypair: str = None,
  labels: typing.Mapping[str] = None,
  master_count: typing.Union[int, float] = None,
  master_flavor: str = None,
  merge_labels: typing.Union[bool, IResolvable] = None,
  name: str = None,
  node_count: typing.Union[int, float] = None,
  region: str = None,
  timeouts: ContainerinfraClusterV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.clusterTemplateId">cluster_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#cluster_template_id ContainerinfraClusterV1#cluster_template_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.createTimeout">create_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create_timeout ContainerinfraClusterV1#create_timeout}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.discoveryUrl">discovery_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#discovery_url ContainerinfraClusterV1#discovery_url}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#docker_volume_size ContainerinfraClusterV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.fixedNetwork">fixed_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_network ContainerinfraClusterV1#fixed_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.fixedSubnet">fixed_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_subnet ContainerinfraClusterV1#fixed_subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#flavor ContainerinfraClusterV1#flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.floatingIpEnabled">floating_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#floating_ip_enabled ContainerinfraClusterV1#floating_ip_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#id ContainerinfraClusterV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.keypair">keypair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#keypair ContainerinfraClusterV1#keypair}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#labels ContainerinfraClusterV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.masterCount">master_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_count ContainerinfraClusterV1#master_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.masterFlavor">master_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_flavor ContainerinfraClusterV1#master_flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.mergeLabels">merge_labels</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#merge_labels ContainerinfraClusterV1#merge_labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#name ContainerinfraClusterV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#node_count ContainerinfraClusterV1#node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#region ContainerinfraClusterV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_template_id`<sup>Required</sup> <a name="cluster_template_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.clusterTemplateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#cluster_template_id ContainerinfraClusterV1#cluster_template_id}.

---

##### `create_timeout`<sup>Optional</sup> <a name="create_timeout" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.createTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create_timeout ContainerinfraClusterV1#create_timeout}.

---

##### `discovery_url`<sup>Optional</sup> <a name="discovery_url" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.discoveryUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#discovery_url ContainerinfraClusterV1#discovery_url}.

---

##### `docker_volume_size`<sup>Optional</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.dockerVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#docker_volume_size ContainerinfraClusterV1#docker_volume_size}.

---

##### `fixed_network`<sup>Optional</sup> <a name="fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.fixedNetwork"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_network ContainerinfraClusterV1#fixed_network}.

---

##### `fixed_subnet`<sup>Optional</sup> <a name="fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.fixedSubnet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_subnet ContainerinfraClusterV1#fixed_subnet}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#flavor ContainerinfraClusterV1#flavor}.

---

##### `floating_ip_enabled`<sup>Optional</sup> <a name="floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.floatingIpEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#floating_ip_enabled ContainerinfraClusterV1#floating_ip_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#id ContainerinfraClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keypair`<sup>Optional</sup> <a name="keypair" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.keypair"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#keypair ContainerinfraClusterV1#keypair}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#labels ContainerinfraClusterV1#labels}.

---

##### `master_count`<sup>Optional</sup> <a name="master_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.masterCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_count ContainerinfraClusterV1#master_count}.

---

##### `master_flavor`<sup>Optional</sup> <a name="master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.masterFlavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_flavor ContainerinfraClusterV1#master_flavor}.

---

##### `merge_labels`<sup>Optional</sup> <a name="merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.mergeLabels"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#merge_labels ContainerinfraClusterV1#merge_labels}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#name ContainerinfraClusterV1#name}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#node_count ContainerinfraClusterV1#node_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#region ContainerinfraClusterV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#timeouts ContainerinfraClusterV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetCreateTimeout">reset_create_timeout</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDiscoveryUrl">reset_discovery_url</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDockerVolumeSize">reset_docker_volume_size</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedNetwork">reset_fixed_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedSubnet">reset_fixed_subnet</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFlavor">reset_flavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFloatingIpEnabled">reset_floating_ip_enabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetKeypair">reset_keypair</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterCount">reset_master_count</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterFlavor">reset_master_flavor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMergeLabels">reset_merge_labels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create ContainerinfraClusterV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#delete ContainerinfraClusterV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#update ContainerinfraClusterV1#update}.

---

##### `reset_create_timeout` <a name="reset_create_timeout" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetCreateTimeout"></a>

```python
def reset_create_timeout() -> None
```

##### `reset_discovery_url` <a name="reset_discovery_url" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDiscoveryUrl"></a>

```python
def reset_discovery_url() -> None
```

##### `reset_docker_volume_size` <a name="reset_docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetDockerVolumeSize"></a>

```python
def reset_docker_volume_size() -> None
```

##### `reset_fixed_network` <a name="reset_fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedNetwork"></a>

```python
def reset_fixed_network() -> None
```

##### `reset_fixed_subnet` <a name="reset_fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFixedSubnet"></a>

```python
def reset_fixed_subnet() -> None
```

##### `reset_flavor` <a name="reset_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFlavor"></a>

```python
def reset_flavor() -> None
```

##### `reset_floating_ip_enabled` <a name="reset_floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetFloatingIpEnabled"></a>

```python
def reset_floating_ip_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_keypair` <a name="reset_keypair" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetKeypair"></a>

```python
def reset_keypair() -> None
```

##### `reset_labels` <a name="reset_labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_master_count` <a name="reset_master_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterCount"></a>

```python
def reset_master_count() -> None
```

##### `reset_master_flavor` <a name="reset_master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMasterFlavor"></a>

```python
def reset_master_flavor() -> None
```

##### `reset_merge_labels` <a name="reset_merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetMergeLabels"></a>

```python
def reset_merge_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerinfraClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerinfraClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerinfraClusterV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerinfraClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerinfraClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.apiAddress">api_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.coeVersion">coe_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.containerVersion">container_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.kubeconfig">kubeconfig</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterAddresses">master_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeAddresses">node_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.stackId">stack_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference">ContainerinfraClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateIdInput">cluster_template_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeoutInput">create_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrlInput">discovery_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSizeInput">docker_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetworkInput">fixed_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnetInput">fixed_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavorInput">flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabledInput">floating_ip_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypairInput">keypair_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCountInput">master_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavorInput">master_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabelsInput">merge_labels_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateId">cluster_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeout">create_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetwork">fixed_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnet">fixed_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavor">flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabled">floating_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypair">keypair</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCount">master_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavor">master_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabels">merge_labels</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_address`<sup>Required</sup> <a name="api_address" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.apiAddress"></a>

```python
api_address: str
```

- *Type:* str

---

##### `coe_version`<sup>Required</sup> <a name="coe_version" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.coeVersion"></a>

```python
coe_version: str
```

- *Type:* str

---

##### `container_version`<sup>Required</sup> <a name="container_version" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.containerVersion"></a>

```python
container_version: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `kubeconfig`<sup>Required</sup> <a name="kubeconfig" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.kubeconfig"></a>

```python
kubeconfig: StringMap
```

- *Type:* cdktf.StringMap

---

##### `master_addresses`<sup>Required</sup> <a name="master_addresses" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterAddresses"></a>

```python
master_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `node_addresses`<sup>Required</sup> <a name="node_addresses" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeAddresses"></a>

```python
node_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `stack_id`<sup>Required</sup> <a name="stack_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.stackId"></a>

```python
stack_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeouts"></a>

```python
timeouts: ContainerinfraClusterV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference">ContainerinfraClusterV1TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `cluster_template_id_input`<sup>Optional</sup> <a name="cluster_template_id_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateIdInput"></a>

```python
cluster_template_id_input: str
```

- *Type:* str

---

##### `create_timeout_input`<sup>Optional</sup> <a name="create_timeout_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeoutInput"></a>

```python
create_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `discovery_url_input`<sup>Optional</sup> <a name="discovery_url_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrlInput"></a>

```python
discovery_url_input: str
```

- *Type:* str

---

##### `docker_volume_size_input`<sup>Optional</sup> <a name="docker_volume_size_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSizeInput"></a>

```python
docker_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_network_input`<sup>Optional</sup> <a name="fixed_network_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetworkInput"></a>

```python
fixed_network_input: str
```

- *Type:* str

---

##### `fixed_subnet_input`<sup>Optional</sup> <a name="fixed_subnet_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnetInput"></a>

```python
fixed_subnet_input: str
```

- *Type:* str

---

##### `flavor_input`<sup>Optional</sup> <a name="flavor_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavorInput"></a>

```python
flavor_input: str
```

- *Type:* str

---

##### `floating_ip_enabled_input`<sup>Optional</sup> <a name="floating_ip_enabled_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabledInput"></a>

```python
floating_ip_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `keypair_input`<sup>Optional</sup> <a name="keypair_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypairInput"></a>

```python
keypair_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `master_count_input`<sup>Optional</sup> <a name="master_count_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCountInput"></a>

```python
master_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_flavor_input`<sup>Optional</sup> <a name="master_flavor_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavorInput"></a>

```python
master_flavor_input: str
```

- *Type:* str

---

##### `merge_labels_input`<sup>Optional</sup> <a name="merge_labels_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabelsInput"></a>

```python
merge_labels_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerinfraClusterV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>]

---

##### `cluster_template_id`<sup>Required</sup> <a name="cluster_template_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.clusterTemplateId"></a>

```python
cluster_template_id: str
```

- *Type:* str

---

##### `create_timeout`<sup>Required</sup> <a name="create_timeout" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.createTimeout"></a>

```python
create_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `discovery_url`<sup>Required</sup> <a name="discovery_url" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

---

##### `docker_volume_size`<sup>Required</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fixed_network`<sup>Required</sup> <a name="fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedNetwork"></a>

```python
fixed_network: str
```

- *Type:* str

---

##### `fixed_subnet`<sup>Required</sup> <a name="fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.fixedSubnet"></a>

```python
fixed_subnet: str
```

- *Type:* str

---

##### `flavor`<sup>Required</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

---

##### `floating_ip_enabled`<sup>Required</sup> <a name="floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.floatingIpEnabled"></a>

```python
floating_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `keypair`<sup>Required</sup> <a name="keypair" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.keypair"></a>

```python
keypair: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `master_count`<sup>Required</sup> <a name="master_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterCount"></a>

```python
master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_flavor`<sup>Required</sup> <a name="master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.masterFlavor"></a>

```python
master_flavor: str
```

- *Type:* str

---

##### `merge_labels`<sup>Required</sup> <a name="merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.mergeLabels"></a>

```python
merge_labels: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerinfraClusterV1Config <a name="ContainerinfraClusterV1Config" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_template_id: str,
  create_timeout: typing.Union[int, float] = None,
  discovery_url: str = None,
  docker_volume_size: typing.Union[int, float] = None,
  fixed_network: str = None,
  fixed_subnet: str = None,
  flavor: str = None,
  floating_ip_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  keypair: str = None,
  labels: typing.Mapping[str] = None,
  master_count: typing.Union[int, float] = None,
  master_flavor: str = None,
  merge_labels: typing.Union[bool, IResolvable] = None,
  name: str = None,
  node_count: typing.Union[int, float] = None,
  region: str = None,
  timeouts: ContainerinfraClusterV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.clusterTemplateId">cluster_template_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#cluster_template_id ContainerinfraClusterV1#cluster_template_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.createTimeout">create_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create_timeout ContainerinfraClusterV1#create_timeout}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.discoveryUrl">discovery_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#discovery_url ContainerinfraClusterV1#discovery_url}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#docker_volume_size ContainerinfraClusterV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedNetwork">fixed_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_network ContainerinfraClusterV1#fixed_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedSubnet">fixed_subnet</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_subnet ContainerinfraClusterV1#fixed_subnet}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.flavor">flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#flavor ContainerinfraClusterV1#flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.floatingIpEnabled">floating_ip_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#floating_ip_enabled ContainerinfraClusterV1#floating_ip_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#id ContainerinfraClusterV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.keypair">keypair</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#keypair ContainerinfraClusterV1#keypair}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#labels ContainerinfraClusterV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterCount">master_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_count ContainerinfraClusterV1#master_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterFlavor">master_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_flavor ContainerinfraClusterV1#master_flavor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.mergeLabels">merge_labels</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#merge_labels ContainerinfraClusterV1#merge_labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#name ContainerinfraClusterV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#node_count ContainerinfraClusterV1#node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#region ContainerinfraClusterV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_template_id`<sup>Required</sup> <a name="cluster_template_id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.clusterTemplateId"></a>

```python
cluster_template_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#cluster_template_id ContainerinfraClusterV1#cluster_template_id}.

---

##### `create_timeout`<sup>Optional</sup> <a name="create_timeout" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.createTimeout"></a>

```python
create_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create_timeout ContainerinfraClusterV1#create_timeout}.

---

##### `discovery_url`<sup>Optional</sup> <a name="discovery_url" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.discoveryUrl"></a>

```python
discovery_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#discovery_url ContainerinfraClusterV1#discovery_url}.

---

##### `docker_volume_size`<sup>Optional</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#docker_volume_size ContainerinfraClusterV1#docker_volume_size}.

---

##### `fixed_network`<sup>Optional</sup> <a name="fixed_network" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedNetwork"></a>

```python
fixed_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_network ContainerinfraClusterV1#fixed_network}.

---

##### `fixed_subnet`<sup>Optional</sup> <a name="fixed_subnet" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.fixedSubnet"></a>

```python
fixed_subnet: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#fixed_subnet ContainerinfraClusterV1#fixed_subnet}.

---

##### `flavor`<sup>Optional</sup> <a name="flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.flavor"></a>

```python
flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#flavor ContainerinfraClusterV1#flavor}.

---

##### `floating_ip_enabled`<sup>Optional</sup> <a name="floating_ip_enabled" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.floatingIpEnabled"></a>

```python
floating_ip_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#floating_ip_enabled ContainerinfraClusterV1#floating_ip_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#id ContainerinfraClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keypair`<sup>Optional</sup> <a name="keypair" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.keypair"></a>

```python
keypair: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#keypair ContainerinfraClusterV1#keypair}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#labels ContainerinfraClusterV1#labels}.

---

##### `master_count`<sup>Optional</sup> <a name="master_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterCount"></a>

```python
master_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_count ContainerinfraClusterV1#master_count}.

---

##### `master_flavor`<sup>Optional</sup> <a name="master_flavor" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.masterFlavor"></a>

```python
master_flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#master_flavor ContainerinfraClusterV1#master_flavor}.

---

##### `merge_labels`<sup>Optional</sup> <a name="merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.mergeLabels"></a>

```python
merge_labels: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#merge_labels ContainerinfraClusterV1#merge_labels}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#name ContainerinfraClusterV1#name}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#node_count ContainerinfraClusterV1#node_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#region ContainerinfraClusterV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Config.property.timeouts"></a>

```python
timeouts: ContainerinfraClusterV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#timeouts ContainerinfraClusterV1#timeouts}

---

### ContainerinfraClusterV1Timeouts <a name="ContainerinfraClusterV1Timeouts" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create ContainerinfraClusterV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#delete ContainerinfraClusterV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#update ContainerinfraClusterV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#create ContainerinfraClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#delete ContainerinfraClusterV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_cluster_v1#update ContainerinfraClusterV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerinfraClusterV1TimeoutsOutputReference <a name="ContainerinfraClusterV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_cluster_v1

containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerinfraClusterV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraClusterV1.ContainerinfraClusterV1Timeouts">ContainerinfraClusterV1Timeouts</a>]

---




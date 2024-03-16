# `containerinfraNodegroupV1` Submodule <a name="`containerinfraNodegroupV1` Submodule" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerinfraNodegroupV1 <a name="ContainerinfraNodegroupV1" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1 openstack_containerinfra_nodegroup_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  name: str,
  docker_volume_size: typing.Union[int, float] = None,
  flavor_id: str = None,
  id: str = None,
  image_id: str = None,
  labels: typing.Mapping[str] = None,
  max_node_count: typing.Union[int, float] = None,
  merge_labels: typing.Union[bool, IResolvable] = None,
  min_node_count: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  region: str = None,
  role: str = None,
  timeouts: ContainerinfraNodegroupV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#cluster_id ContainerinfraNodegroupV1#cluster_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#name ContainerinfraNodegroupV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#docker_volume_size ContainerinfraNodegroupV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#flavor_id ContainerinfraNodegroupV1#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#id ContainerinfraNodegroupV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#image_id ContainerinfraNodegroupV1#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#labels ContainerinfraNodegroupV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#max_node_count ContainerinfraNodegroupV1#max_node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.mergeLabels">merge_labels</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#merge_labels ContainerinfraNodegroupV1#merge_labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#min_node_count ContainerinfraNodegroupV1#min_node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#node_count ContainerinfraNodegroupV1#node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#region ContainerinfraNodegroupV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#role ContainerinfraNodegroupV1#role}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#cluster_id ContainerinfraNodegroupV1#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#name ContainerinfraNodegroupV1#name}.

---

##### `docker_volume_size`<sup>Optional</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.dockerVolumeSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#docker_volume_size ContainerinfraNodegroupV1#docker_volume_size}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#flavor_id ContainerinfraNodegroupV1#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#id ContainerinfraNodegroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.imageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#image_id ContainerinfraNodegroupV1#image_id}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#labels ContainerinfraNodegroupV1#labels}.

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.maxNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#max_node_count ContainerinfraNodegroupV1#max_node_count}.

---

##### `merge_labels`<sup>Optional</sup> <a name="merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.mergeLabels"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#merge_labels ContainerinfraNodegroupV1#merge_labels}.

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.minNodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#min_node_count ContainerinfraNodegroupV1#min_node_count}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#node_count ContainerinfraNodegroupV1#node_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#region ContainerinfraNodegroupV1#region}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#role ContainerinfraNodegroupV1#role}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#timeouts ContainerinfraNodegroupV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetDockerVolumeSize">reset_docker_volume_size</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetImageId">reset_image_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMaxNodeCount">reset_max_node_count</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMergeLabels">reset_merge_labels</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMinNodeCount">reset_min_node_count</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetNodeCount">reset_node_count</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#create ContainerinfraNodegroupV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#delete ContainerinfraNodegroupV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#update ContainerinfraNodegroupV1#update}.

---

##### `reset_docker_volume_size` <a name="reset_docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetDockerVolumeSize"></a>

```python
def reset_docker_volume_size() -> None
```

##### `reset_flavor_id` <a name="reset_flavor_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_id` <a name="reset_image_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetImageId"></a>

```python
def reset_image_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_max_node_count` <a name="reset_max_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMaxNodeCount"></a>

```python
def reset_max_node_count() -> None
```

##### `reset_merge_labels` <a name="reset_merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMergeLabels"></a>

```python
def reset_merge_labels() -> None
```

##### `reset_min_node_count` <a name="reset_min_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetMinNodeCount"></a>

```python
def reset_min_node_count() -> None
```

##### `reset_node_count` <a name="reset_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetNodeCount"></a>

```python
def reset_node_count() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_role` <a name="reset_role" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ContainerinfraNodegroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ContainerinfraNodegroupV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ContainerinfraNodegroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerinfraNodegroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference">ContainerinfraNodegroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSizeInput">docker_volume_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageIdInput">image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCountInput">max_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabelsInput">merge_labels_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCountInput">min_node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabels">merge_labels</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.role">role</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeouts"></a>

```python
timeouts: ContainerinfraNodegroupV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference">ContainerinfraNodegroupV1TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `docker_volume_size_input`<sup>Optional</sup> <a name="docker_volume_size_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSizeInput"></a>

```python
docker_volume_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_id_input`<sup>Optional</sup> <a name="image_id_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageIdInput"></a>

```python
image_id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_node_count_input`<sup>Optional</sup> <a name="max_node_count_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCountInput"></a>

```python
max_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `merge_labels_input`<sup>Optional</sup> <a name="merge_labels_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabelsInput"></a>

```python
merge_labels_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_node_count_input`<sup>Optional</sup> <a name="min_node_count_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCountInput"></a>

```python
min_node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ContainerinfraNodegroupV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `docker_volume_size`<sup>Required</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `max_node_count`<sup>Required</sup> <a name="max_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `merge_labels`<sup>Required</sup> <a name="merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.mergeLabels"></a>

```python
merge_labels: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `min_node_count`<sup>Required</sup> <a name="min_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.role"></a>

```python
role: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerinfraNodegroupV1Config <a name="ContainerinfraNodegroupV1Config" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_id: str,
  name: str,
  docker_volume_size: typing.Union[int, float] = None,
  flavor_id: str = None,
  id: str = None,
  image_id: str = None,
  labels: typing.Mapping[str] = None,
  max_node_count: typing.Union[int, float] = None,
  merge_labels: typing.Union[bool, IResolvable] = None,
  min_node_count: typing.Union[int, float] = None,
  node_count: typing.Union[int, float] = None,
  region: str = None,
  role: str = None,
  timeouts: ContainerinfraNodegroupV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#cluster_id ContainerinfraNodegroupV1#cluster_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#name ContainerinfraNodegroupV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dockerVolumeSize">docker_volume_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#docker_volume_size ContainerinfraNodegroupV1#docker_volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#flavor_id ContainerinfraNodegroupV1#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#id ContainerinfraNodegroupV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.imageId">image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#image_id ContainerinfraNodegroupV1#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#labels ContainerinfraNodegroupV1#labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.maxNodeCount">max_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#max_node_count ContainerinfraNodegroupV1#max_node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.mergeLabels">merge_labels</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#merge_labels ContainerinfraNodegroupV1#merge_labels}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.minNodeCount">min_node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#min_node_count ContainerinfraNodegroupV1#min_node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#node_count ContainerinfraNodegroupV1#node_count}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#region ContainerinfraNodegroupV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#role ContainerinfraNodegroupV1#role}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#cluster_id ContainerinfraNodegroupV1#cluster_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#name ContainerinfraNodegroupV1#name}.

---

##### `docker_volume_size`<sup>Optional</sup> <a name="docker_volume_size" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.dockerVolumeSize"></a>

```python
docker_volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#docker_volume_size ContainerinfraNodegroupV1#docker_volume_size}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#flavor_id ContainerinfraNodegroupV1#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#id ContainerinfraNodegroupV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_id`<sup>Optional</sup> <a name="image_id" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#image_id ContainerinfraNodegroupV1#image_id}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#labels ContainerinfraNodegroupV1#labels}.

---

##### `max_node_count`<sup>Optional</sup> <a name="max_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.maxNodeCount"></a>

```python
max_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#max_node_count ContainerinfraNodegroupV1#max_node_count}.

---

##### `merge_labels`<sup>Optional</sup> <a name="merge_labels" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.mergeLabels"></a>

```python
merge_labels: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#merge_labels ContainerinfraNodegroupV1#merge_labels}.

---

##### `min_node_count`<sup>Optional</sup> <a name="min_node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.minNodeCount"></a>

```python
min_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#min_node_count ContainerinfraNodegroupV1#min_node_count}.

---

##### `node_count`<sup>Optional</sup> <a name="node_count" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#node_count ContainerinfraNodegroupV1#node_count}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#region ContainerinfraNodegroupV1#region}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#role ContainerinfraNodegroupV1#role}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Config.property.timeouts"></a>

```python
timeouts: ContainerinfraNodegroupV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#timeouts ContainerinfraNodegroupV1#timeouts}

---

### ContainerinfraNodegroupV1Timeouts <a name="ContainerinfraNodegroupV1Timeouts" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#create ContainerinfraNodegroupV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#delete ContainerinfraNodegroupV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#update ContainerinfraNodegroupV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#create ContainerinfraNodegroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#delete ContainerinfraNodegroupV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/containerinfra_nodegroup_v1#update ContainerinfraNodegroupV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerinfraNodegroupV1TimeoutsOutputReference <a name="ContainerinfraNodegroupV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import containerinfra_nodegroup_v1

containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ContainerinfraNodegroupV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.containerinfraNodegroupV1.ContainerinfraNodegroupV1Timeouts">ContainerinfraNodegroupV1Timeouts</a>]

---




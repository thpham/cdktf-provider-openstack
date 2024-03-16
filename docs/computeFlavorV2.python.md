# `computeFlavorV2` Submodule <a name="`computeFlavorV2` Submodule" id="@ithings/cdktf-provider-openstack.computeFlavorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeFlavorV2 <a name="ComputeFlavorV2" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2 openstack_compute_flavor_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_flavor_v2

computeFlavorV2.ComputeFlavorV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: typing.Union[int, float],
  name: str,
  ram: typing.Union[int, float],
  vcpus: typing.Union[int, float],
  description: str = None,
  ephemeral: typing.Union[int, float] = None,
  extra_specs: typing.Mapping[str] = None,
  flavor_id: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  region: str = None,
  rx_tx_factor: typing.Union[int, float] = None,
  swap: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.disk">disk</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#disk ComputeFlavorV2#disk}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#name ComputeFlavorV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ram ComputeFlavorV2#ram}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#vcpus ComputeFlavorV2#vcpus}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#description ComputeFlavorV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.ephemeral">ephemeral</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ephemeral ComputeFlavorV2#ephemeral}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.extraSpecs">extra_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#extra_specs ComputeFlavorV2#extra_specs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#flavor_id ComputeFlavorV2#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#id ComputeFlavorV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#is_public ComputeFlavorV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#region ComputeFlavorV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.rxTxFactor">rx_tx_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#rx_tx_factor ComputeFlavorV2#rx_tx_factor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.swap">swap</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#swap ComputeFlavorV2#swap}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.disk"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#disk ComputeFlavorV2#disk}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#name ComputeFlavorV2#name}.

---

##### `ram`<sup>Required</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.ram"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ram ComputeFlavorV2#ram}.

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.vcpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#vcpus ComputeFlavorV2#vcpus}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#description ComputeFlavorV2#description}.

---

##### `ephemeral`<sup>Optional</sup> <a name="ephemeral" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.ephemeral"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ephemeral ComputeFlavorV2#ephemeral}.

---

##### `extra_specs`<sup>Optional</sup> <a name="extra_specs" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.extraSpecs"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#extra_specs ComputeFlavorV2#extra_specs}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#flavor_id ComputeFlavorV2#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#id ComputeFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.isPublic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#is_public ComputeFlavorV2#is_public}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#region ComputeFlavorV2#region}.

---

##### `rx_tx_factor`<sup>Optional</sup> <a name="rx_tx_factor" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.rxTxFactor"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#rx_tx_factor ComputeFlavorV2#rx_tx_factor}.

---

##### `swap`<sup>Optional</sup> <a name="swap" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.Initializer.parameter.swap"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#swap ComputeFlavorV2#swap}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetEphemeral">reset_ephemeral</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetExtraSpecs">reset_extra_specs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetIsPublic">reset_is_public</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRxTxFactor">reset_rx_tx_factor</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetSwap">reset_swap</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_ephemeral` <a name="reset_ephemeral" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetEphemeral"></a>

```python
def reset_ephemeral() -> None
```

##### `reset_extra_specs` <a name="reset_extra_specs" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetExtraSpecs"></a>

```python
def reset_extra_specs() -> None
```

##### `reset_flavor_id` <a name="reset_flavor_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_public` <a name="reset_is_public" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetIsPublic"></a>

```python
def reset_is_public() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_rx_tx_factor` <a name="reset_rx_tx_factor" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetRxTxFactor"></a>

```python
def reset_rx_tx_factor() -> None
```

##### `reset_swap` <a name="reset_swap" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.resetSwap"></a>

```python
def reset_swap() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeFlavorV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import compute_flavor_v2

computeFlavorV2.ComputeFlavorV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import compute_flavor_v2

computeFlavorV2.ComputeFlavorV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import compute_flavor_v2

computeFlavorV2.ComputeFlavorV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import compute_flavor_v2

computeFlavorV2.ComputeFlavorV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeFlavorV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeFlavorV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeFlavorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeFlavorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.diskInput">disk_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeralInput">ephemeral_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecsInput">extra_specs_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublicInput">is_public_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactorInput">rx_tx_factor_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swapInput">swap_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpusInput">vcpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.disk">disk</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeral">ephemeral</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecs">extra_specs</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactor">rx_tx_factor</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swap">swap</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_input`<sup>Optional</sup> <a name="disk_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.diskInput"></a>

```python
disk_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ephemeral_input`<sup>Optional</sup> <a name="ephemeral_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeralInput"></a>

```python
ephemeral_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extra_specs_input`<sup>Optional</sup> <a name="extra_specs_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecsInput"></a>

```python
extra_specs_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_public_input`<sup>Optional</sup> <a name="is_public_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublicInput"></a>

```python
is_public_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `rx_tx_factor_input`<sup>Optional</sup> <a name="rx_tx_factor_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactorInput"></a>

```python
rx_tx_factor_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `swap_input`<sup>Optional</sup> <a name="swap_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swapInput"></a>

```python
swap_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus_input`<sup>Optional</sup> <a name="vcpus_input" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpusInput"></a>

```python
vcpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk`<sup>Required</sup> <a name="disk" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.disk"></a>

```python
disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ephemeral`<sup>Required</sup> <a name="ephemeral" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ephemeral"></a>

```python
ephemeral: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extra_specs`<sup>Required</sup> <a name="extra_specs" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.extraSpecs"></a>

```python
extra_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_public`<sup>Required</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `rx_tx_factor`<sup>Required</sup> <a name="rx_tx_factor" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.rxTxFactor"></a>

```python
rx_tx_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `swap`<sup>Required</sup> <a name="swap" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.swap"></a>

```python
swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeFlavorV2Config <a name="ComputeFlavorV2Config" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import compute_flavor_v2

computeFlavorV2.ComputeFlavorV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk: typing.Union[int, float],
  name: str,
  ram: typing.Union[int, float],
  vcpus: typing.Union[int, float],
  description: str = None,
  ephemeral: typing.Union[int, float] = None,
  extra_specs: typing.Mapping[str] = None,
  flavor_id: str = None,
  id: str = None,
  is_public: typing.Union[bool, IResolvable] = None,
  region: str = None,
  rx_tx_factor: typing.Union[int, float] = None,
  swap: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.disk">disk</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#disk ComputeFlavorV2#disk}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#name ComputeFlavorV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ram ComputeFlavorV2#ram}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.vcpus">vcpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#vcpus ComputeFlavorV2#vcpus}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#description ComputeFlavorV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ephemeral">ephemeral</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ephemeral ComputeFlavorV2#ephemeral}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.extraSpecs">extra_specs</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#extra_specs ComputeFlavorV2#extra_specs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#flavor_id ComputeFlavorV2#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#id ComputeFlavorV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.isPublic">is_public</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#is_public ComputeFlavorV2#is_public}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#region ComputeFlavorV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.rxTxFactor">rx_tx_factor</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#rx_tx_factor ComputeFlavorV2#rx_tx_factor}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.swap">swap</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#swap ComputeFlavorV2#swap}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk`<sup>Required</sup> <a name="disk" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.disk"></a>

```python
disk: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#disk ComputeFlavorV2#disk}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#name ComputeFlavorV2#name}.

---

##### `ram`<sup>Required</sup> <a name="ram" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ram ComputeFlavorV2#ram}.

---

##### `vcpus`<sup>Required</sup> <a name="vcpus" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.vcpus"></a>

```python
vcpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#vcpus ComputeFlavorV2#vcpus}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#description ComputeFlavorV2#description}.

---

##### `ephemeral`<sup>Optional</sup> <a name="ephemeral" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.ephemeral"></a>

```python
ephemeral: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#ephemeral ComputeFlavorV2#ephemeral}.

---

##### `extra_specs`<sup>Optional</sup> <a name="extra_specs" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.extraSpecs"></a>

```python
extra_specs: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#extra_specs ComputeFlavorV2#extra_specs}.

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#flavor_id ComputeFlavorV2#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#id ComputeFlavorV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_public`<sup>Optional</sup> <a name="is_public" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.isPublic"></a>

```python
is_public: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#is_public ComputeFlavorV2#is_public}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#region ComputeFlavorV2#region}.

---

##### `rx_tx_factor`<sup>Optional</sup> <a name="rx_tx_factor" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.rxTxFactor"></a>

```python
rx_tx_factor: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#rx_tx_factor ComputeFlavorV2#rx_tx_factor}.

---

##### `swap`<sup>Optional</sup> <a name="swap" id="@ithings/cdktf-provider-openstack.computeFlavorV2.ComputeFlavorV2Config.property.swap"></a>

```python
swap: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_flavor_v2#swap ComputeFlavorV2#swap}.

---




# `dbInstanceV1` Submodule <a name="`dbInstanceV1` Submodule" id="@ithings/cdktf-provider-openstack.dbInstanceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstanceV1 <a name="DbInstanceV1" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1 openstack_db_instance_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore: DbInstanceV1Datastore,
  name: str,
  size: typing.Union[int, float],
  configuration_id: str = None,
  database: typing.Union[IResolvable, typing.List[DbInstanceV1Database]] = None,
  flavor_id: str = None,
  id: str = None,
  network: typing.Union[IResolvable, typing.List[DbInstanceV1Network]] = None,
  region: str = None,
  timeouts: DbInstanceV1Timeouts = None,
  user: typing.Union[IResolvable, typing.List[DbInstanceV1User]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.datastore">datastore</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a></code> | datastore block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#size DbInstanceV1#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#configuration_id DbInstanceV1#configuration_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]</code> | database block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#flavor_id DbInstanceV1#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#id DbInstanceV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#region DbInstanceV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]</code> | user block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.datastore"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#datastore DbInstanceV1#datastore}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#size DbInstanceV1#size}.

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.configurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#configuration_id DbInstanceV1#configuration_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.database"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#database DbInstanceV1#database}

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.flavorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#flavor_id DbInstanceV1#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#id DbInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.network"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#network DbInstanceV1#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#region DbInstanceV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#timeouts DbInstanceV1#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.Initializer.parameter.user"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#user DbInstanceV1#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatastore">put_datastore</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putNetwork">put_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetConfigurationId">reset_configuration_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetFlavorId">reset_flavor_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetUser">reset_user</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_database` <a name="put_database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatabase"></a>

```python
def put_database(
  value: typing.Union[IResolvable, typing.List[DbInstanceV1Database]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatabase.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]

---

##### `put_datastore` <a name="put_datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatastore"></a>

```python
def put_datastore(
  type: str,
  version: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatastore.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#type DbInstanceV1#type}.

---

###### `version`<sup>Required</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putDatastore.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#version DbInstanceV1#version}.

---

##### `put_network` <a name="put_network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putNetwork"></a>

```python
def put_network(
  value: typing.Union[IResolvable, typing.List[DbInstanceV1Network]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putNetwork.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#create DbInstanceV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#delete DbInstanceV1#delete}.

---

##### `put_user` <a name="put_user" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putUser"></a>

```python
def put_user(
  value: typing.Union[IResolvable, typing.List[DbInstanceV1User]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.putUser.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]

---

##### `reset_configuration_id` <a name="reset_configuration_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetConfigurationId"></a>

```python
def reset_configuration_id() -> None
```

##### `reset_database` <a name="reset_database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_flavor_id` <a name="reset_flavor_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetFlavorId"></a>

```python
def reset_flavor_id() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_network` <a name="reset_network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user` <a name="reset_user" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.resetUser"></a>

```python
def reset_user() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DbInstanceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DbInstanceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DbInstanceV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DbInstanceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DbInstanceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.database">database</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList">DbInstanceV1DatabaseList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastore">datastore</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference">DbInstanceV1DatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.network">network</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList">DbInstanceV1NetworkList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference">DbInstanceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.user">user</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList">DbInstanceV1UserList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationIdInput">configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.databaseInput">database_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastoreInput">datastore_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorIdInput">flavor_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.networkInput">network_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.userInput">user_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorId">flavor_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database`<sup>Required</sup> <a name="database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.database"></a>

```python
database: DbInstanceV1DatabaseList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList">DbInstanceV1DatabaseList</a>

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastore"></a>

```python
datastore: DbInstanceV1DatastoreOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference">DbInstanceV1DatastoreOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.network"></a>

```python
network: DbInstanceV1NetworkList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList">DbInstanceV1NetworkList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeouts"></a>

```python
timeouts: DbInstanceV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference">DbInstanceV1TimeoutsOutputReference</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.user"></a>

```python
user: DbInstanceV1UserList
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList">DbInstanceV1UserList</a>

---

##### `configuration_id_input`<sup>Optional</sup> <a name="configuration_id_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationIdInput"></a>

```python
configuration_id_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.databaseInput"></a>

```python
database_input: typing.Union[IResolvable, typing.List[DbInstanceV1Database]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]

---

##### `datastore_input`<sup>Optional</sup> <a name="datastore_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.datastoreInput"></a>

```python
datastore_input: DbInstanceV1Datastore
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

---

##### `flavor_id_input`<sup>Optional</sup> <a name="flavor_id_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorIdInput"></a>

```python
flavor_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.networkInput"></a>

```python
network_input: typing.Union[IResolvable, typing.List[DbInstanceV1Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DbInstanceV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.userInput"></a>

```python
user_input: typing.Union[IResolvable, typing.List[DbInstanceV1User]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `flavor_id`<sup>Required</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceV1Config <a name="DbInstanceV1Config" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  datastore: DbInstanceV1Datastore,
  name: str,
  size: typing.Union[int, float],
  configuration_id: str = None,
  database: typing.Union[IResolvable, typing.List[DbInstanceV1Database]] = None,
  flavor_id: str = None,
  id: str = None,
  network: typing.Union[IResolvable, typing.List[DbInstanceV1Network]] = None,
  region: str = None,
  timeouts: DbInstanceV1Timeouts = None,
  user: typing.Union[IResolvable, typing.List[DbInstanceV1User]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.datastore">datastore</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a></code> | datastore block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#size DbInstanceV1#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#configuration_id DbInstanceV1#configuration_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.database">database</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]</code> | database block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.flavorId">flavor_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#flavor_id DbInstanceV1#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#id DbInstanceV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.network">network</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#region DbInstanceV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]</code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `datastore`<sup>Required</sup> <a name="datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.datastore"></a>

```python
datastore: DbInstanceV1Datastore
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#datastore DbInstanceV1#datastore}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#size DbInstanceV1#size}.

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#configuration_id DbInstanceV1#configuration_id}.

---

##### `database`<sup>Optional</sup> <a name="database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.database"></a>

```python
database: typing.Union[IResolvable, typing.List[DbInstanceV1Database]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#database DbInstanceV1#database}

---

##### `flavor_id`<sup>Optional</sup> <a name="flavor_id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.flavorId"></a>

```python
flavor_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#flavor_id DbInstanceV1#flavor_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#id DbInstanceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.network"></a>

```python
network: typing.Union[IResolvable, typing.List[DbInstanceV1Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#network DbInstanceV1#network}

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#region DbInstanceV1#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.timeouts"></a>

```python
timeouts: DbInstanceV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#timeouts DbInstanceV1#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Config.property.user"></a>

```python
user: typing.Union[IResolvable, typing.List[DbInstanceV1User]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#user DbInstanceV1#user}

---

### DbInstanceV1Database <a name="DbInstanceV1Database" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1Database(
  name: str,
  charset: str = None,
  collate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.charset">charset</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#charset DbInstanceV1#charset}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.collate">collate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#collate DbInstanceV1#collate}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}.

---

##### `charset`<sup>Optional</sup> <a name="charset" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.charset"></a>

```python
charset: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#charset DbInstanceV1#charset}.

---

##### `collate`<sup>Optional</sup> <a name="collate" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database.property.collate"></a>

```python
collate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#collate DbInstanceV1#collate}.

---

### DbInstanceV1Datastore <a name="DbInstanceV1Datastore" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1Datastore(
  type: str,
  version: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#type DbInstanceV1#type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#version DbInstanceV1#version}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#type DbInstanceV1#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#version DbInstanceV1#version}.

---

### DbInstanceV1Network <a name="DbInstanceV1Network" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1Network(
  fixed_ip_v4: str = None,
  fixed_ip_v6: str = None,
  port: str = None,
  uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV4">fixed_ip_v4</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v4 DbInstanceV1#fixed_ip_v4}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV6">fixed_ip_v6</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v6 DbInstanceV1#fixed_ip_v6}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#port DbInstanceV1#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.uuid">uuid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#uuid DbInstanceV1#uuid}. |

---

##### `fixed_ip_v4`<sup>Optional</sup> <a name="fixed_ip_v4" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV4"></a>

```python
fixed_ip_v4: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v4 DbInstanceV1#fixed_ip_v4}.

---

##### `fixed_ip_v6`<sup>Optional</sup> <a name="fixed_ip_v6" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.fixedIpV6"></a>

```python
fixed_ip_v6: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#fixed_ip_v6 DbInstanceV1#fixed_ip_v6}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#port DbInstanceV1#port}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#uuid DbInstanceV1#uuid}.

---

### DbInstanceV1Timeouts <a name="DbInstanceV1Timeouts" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1Timeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#create DbInstanceV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#delete DbInstanceV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#create DbInstanceV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#delete DbInstanceV1#delete}.

---

### DbInstanceV1User <a name="DbInstanceV1User" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1User(
  name: str,
  databases: typing.List[str] = None,
  host: str = None,
  password: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.databases">databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#databases DbInstanceV1#databases}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#host DbInstanceV1#host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#password DbInstanceV1#password}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#name DbInstanceV1#name}.

---

##### `databases`<sup>Optional</sup> <a name="databases" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.databases"></a>

```python
databases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#databases DbInstanceV1#databases}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#host DbInstanceV1#host}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/db_instance_v1#password DbInstanceV1#password}.

---

## Classes <a name="Classes" id="Classes"></a>

### DbInstanceV1DatabaseList <a name="DbInstanceV1DatabaseList" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1DatabaseList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DbInstanceV1DatabaseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DbInstanceV1Database]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]]

---


### DbInstanceV1DatabaseOutputReference <a name="DbInstanceV1DatabaseOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1DatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCharset">reset_charset</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCollate">reset_collate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_charset` <a name="reset_charset" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCharset"></a>

```python
def reset_charset() -> None
```

##### `reset_collate` <a name="reset_collate" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.resetCollate"></a>

```python
def reset_collate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charsetInput">charset_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collateInput">collate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charset">charset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collate">collate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `charset_input`<sup>Optional</sup> <a name="charset_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charsetInput"></a>

```python
charset_input: str
```

- *Type:* str

---

##### `collate_input`<sup>Optional</sup> <a name="collate_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collateInput"></a>

```python
collate_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `charset`<sup>Required</sup> <a name="charset" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.charset"></a>

```python
charset: str
```

- *Type:* str

---

##### `collate`<sup>Required</sup> <a name="collate" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.collate"></a>

```python
collate: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatabaseOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DbInstanceV1Database]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Database">DbInstanceV1Database</a>]

---


### DbInstanceV1DatastoreOutputReference <a name="DbInstanceV1DatastoreOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1DatastoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1DatastoreOutputReference.property.internalValue"></a>

```python
internal_value: DbInstanceV1Datastore
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Datastore">DbInstanceV1Datastore</a>

---


### DbInstanceV1NetworkList <a name="DbInstanceV1NetworkList" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1NetworkList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DbInstanceV1NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DbInstanceV1Network]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]]

---


### DbInstanceV1NetworkOutputReference <a name="DbInstanceV1NetworkOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1NetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV4">reset_fixed_ip_v4</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV6">reset_fixed_ip_v6</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetUuid">reset_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_fixed_ip_v4` <a name="reset_fixed_ip_v4" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV4"></a>

```python
def reset_fixed_ip_v4() -> None
```

##### `reset_fixed_ip_v6` <a name="reset_fixed_ip_v6" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetFixedIpV6"></a>

```python
def reset_fixed_ip_v6() -> None
```

##### `reset_port` <a name="reset_port" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_uuid` <a name="reset_uuid" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.resetUuid"></a>

```python
def reset_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4Input">fixed_ip_v4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6Input">fixed_ip_v6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuidInput">uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4">fixed_ip_v4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6">fixed_ip_v6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuid">uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fixed_ip_v4_input`<sup>Optional</sup> <a name="fixed_ip_v4_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4Input"></a>

```python
fixed_ip_v4_input: str
```

- *Type:* str

---

##### `fixed_ip_v6_input`<sup>Optional</sup> <a name="fixed_ip_v6_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6Input"></a>

```python
fixed_ip_v6_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `uuid_input`<sup>Optional</sup> <a name="uuid_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuidInput"></a>

```python
uuid_input: str
```

- *Type:* str

---

##### `fixed_ip_v4`<sup>Required</sup> <a name="fixed_ip_v4" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV4"></a>

```python
fixed_ip_v4: str
```

- *Type:* str

---

##### `fixed_ip_v6`<sup>Required</sup> <a name="fixed_ip_v6" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.fixedIpV6"></a>

```python
fixed_ip_v6: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.uuid"></a>

```python
uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1NetworkOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DbInstanceV1Network]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Network">DbInstanceV1Network</a>]

---


### DbInstanceV1TimeoutsOutputReference <a name="DbInstanceV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DbInstanceV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1Timeouts">DbInstanceV1Timeouts</a>]

---


### DbInstanceV1UserList <a name="DbInstanceV1UserList" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1UserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DbInstanceV1UserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DbInstanceV1User]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]]

---


### DbInstanceV1UserOutputReference <a name="DbInstanceV1UserOutputReference" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import db_instance_v1

dbInstanceV1.DbInstanceV1UserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetDatabases">reset_databases</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetPassword">reset_password</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_databases` <a name="reset_databases" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetDatabases"></a>

```python
def reset_databases() -> None
```

##### `reset_host` <a name="reset_host" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_password` <a name="reset_password" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.resetPassword"></a>

```python
def reset_password() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databasesInput">databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databases">databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `databases_input`<sup>Optional</sup> <a name="databases_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databasesInput"></a>

```python
databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `databases`<sup>Required</sup> <a name="databases" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.databases"></a>

```python
databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host`<sup>Required</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1UserOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DbInstanceV1User]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.dbInstanceV1.DbInstanceV1User">DbInstanceV1User</a>]

---




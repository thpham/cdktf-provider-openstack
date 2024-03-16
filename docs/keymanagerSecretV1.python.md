# `keymanagerSecretV1` Submodule <a name="`keymanagerSecretV1` Submodule" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeymanagerSecretV1 <a name="KeymanagerSecretV1" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1 openstack_keymanager_secret_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl: KeymanagerSecretV1Acl = None,
  algorithm: str = None,
  bit_length: typing.Union[int, float] = None,
  expiration: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  mode: str = None,
  name: str = None,
  payload: str = None,
  payload_content_encoding: str = None,
  payload_content_type: str = None,
  region: str = None,
  secret_type: str = None,
  timeouts: KeymanagerSecretV1Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a></code> | acl block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#algorithm KeymanagerSecretV1#algorithm}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.bitLength">bit_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#bit_length KeymanagerSecretV1#bit_length}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.expiration">expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#expiration KeymanagerSecretV1#expiration}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#id KeymanagerSecretV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#metadata KeymanagerSecretV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#mode KeymanagerSecretV1#mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#name KeymanagerSecretV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload KeymanagerSecretV1#payload}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.payloadContentEncoding">payload_content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_encoding KeymanagerSecretV1#payload_content_encoding}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.payloadContentType">payload_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_type KeymanagerSecretV1#payload_content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#region KeymanagerSecretV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.secretType">secret_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#secret_type KeymanagerSecretV1#secret_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.acl"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#acl KeymanagerSecretV1#acl}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#algorithm KeymanagerSecretV1#algorithm}.

---

##### `bit_length`<sup>Optional</sup> <a name="bit_length" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.bitLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#bit_length KeymanagerSecretV1#bit_length}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.expiration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#expiration KeymanagerSecretV1#expiration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#id KeymanagerSecretV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#metadata KeymanagerSecretV1#metadata}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#mode KeymanagerSecretV1#mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#name KeymanagerSecretV1#name}.

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.payload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload KeymanagerSecretV1#payload}.

---

##### `payload_content_encoding`<sup>Optional</sup> <a name="payload_content_encoding" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.payloadContentEncoding"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_encoding KeymanagerSecretV1#payload_content_encoding}.

---

##### `payload_content_type`<sup>Optional</sup> <a name="payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.payloadContentType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_type KeymanagerSecretV1#payload_content_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#region KeymanagerSecretV1#region}.

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.secretType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#secret_type KeymanagerSecretV1#secret_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#timeouts KeymanagerSecretV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putAcl">put_acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAlgorithm">reset_algorithm</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetBitLength">reset_bit_length</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetExpiration">reset_expiration</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayload">reset_payload</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentEncoding">reset_payload_content_encoding</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentType">reset_payload_content_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetSecretType">reset_secret_type</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_acl` <a name="put_acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putAcl"></a>

```python
def put_acl(
  read: KeymanagerSecretV1AclRead = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putAcl.parameter.read"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

read block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#read KeymanagerSecretV1#read}

---

##### `put_timeouts` <a name="put_timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#create KeymanagerSecretV1#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#delete KeymanagerSecretV1#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#update KeymanagerSecretV1#update}.

---

##### `reset_acl` <a name="reset_acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_algorithm` <a name="reset_algorithm" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetAlgorithm"></a>

```python
def reset_algorithm() -> None
```

##### `reset_bit_length` <a name="reset_bit_length" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetBitLength"></a>

```python
def reset_bit_length() -> None
```

##### `reset_expiration` <a name="reset_expiration" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetExpiration"></a>

```python
def reset_expiration() -> None
```

##### `reset_id` <a name="reset_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_mode` <a name="reset_mode" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_name` <a name="reset_name" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_payload` <a name="reset_payload" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayload"></a>

```python
def reset_payload() -> None
```

##### `reset_payload_content_encoding` <a name="reset_payload_content_encoding" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentEncoding"></a>

```python
def reset_payload_content_encoding() -> None
```

##### `reset_payload_content_type` <a name="reset_payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetPayloadContentType"></a>

```python
def reset_payload_content_type() -> None
```

##### `reset_region` <a name="reset_region" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_type` <a name="reset_secret_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetSecretType"></a>

```python
def reset_secret_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KeymanagerSecretV1 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isConstruct"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformElement"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformResource"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KeymanagerSecretV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KeymanagerSecretV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KeymanagerSecretV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KeymanagerSecretV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference">KeymanagerSecretV1AclOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.allMetadata">all_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.contentTypes">content_types</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.creatorId">creator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretRef">secret_ref</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference">KeymanagerSecretV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.aclInput">acl_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLengthInput">bit_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expirationInput">expiration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncodingInput">payload_content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentTypeInput">payload_content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretTypeInput">secret_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLength">bit_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expiration">expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncoding">payload_content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentType">payload_content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretType">secret_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl`<sup>Required</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.acl"></a>

```python
acl: KeymanagerSecretV1AclOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference">KeymanagerSecretV1AclOutputReference</a>

---

##### `all_metadata`<sup>Required</sup> <a name="all_metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.allMetadata"></a>

```python
all_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `content_types`<sup>Required</sup> <a name="content_types" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.contentTypes"></a>

```python
content_types: StringMap
```

- *Type:* cdktf.StringMap

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `creator_id`<sup>Required</sup> <a name="creator_id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.creatorId"></a>

```python
creator_id: str
```

- *Type:* str

---

##### `secret_ref`<sup>Required</sup> <a name="secret_ref" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretRef"></a>

```python
secret_ref: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeouts"></a>

```python
timeouts: KeymanagerSecretV1TimeoutsOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference">KeymanagerSecretV1TimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.aclInput"></a>

```python
acl_input: KeymanagerSecretV1Acl
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `bit_length_input`<sup>Optional</sup> <a name="bit_length_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLengthInput"></a>

```python
bit_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration_input`<sup>Optional</sup> <a name="expiration_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expirationInput"></a>

```python
expiration_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `payload_content_encoding_input`<sup>Optional</sup> <a name="payload_content_encoding_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncodingInput"></a>

```python
payload_content_encoding_input: str
```

- *Type:* str

---

##### `payload_content_type_input`<sup>Optional</sup> <a name="payload_content_type_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentTypeInput"></a>

```python
payload_content_type_input: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_type_input`<sup>Optional</sup> <a name="secret_type_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretTypeInput"></a>

```python
secret_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KeymanagerSecretV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `bit_length`<sup>Required</sup> <a name="bit_length" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.bitLength"></a>

```python
bit_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `payload_content_encoding`<sup>Required</sup> <a name="payload_content_encoding" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentEncoding"></a>

```python
payload_content_encoding: str
```

- *Type:* str

---

##### `payload_content_type`<sup>Required</sup> <a name="payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.payloadContentType"></a>

```python
payload_content_type: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_type`<sup>Required</sup> <a name="secret_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KeymanagerSecretV1Acl <a name="KeymanagerSecretV1Acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1Acl(
  read: KeymanagerSecretV1AclRead = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a></code> | read block. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl.property.read"></a>

```python
read: KeymanagerSecretV1AclRead
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

read block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#read KeymanagerSecretV1#read}

---

### KeymanagerSecretV1AclRead <a name="KeymanagerSecretV1AclRead" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1AclRead(
  project_access: typing.Union[bool, IResolvable] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.projectAccess">project_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#project_access KeymanagerSecretV1#project_access}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.users">users</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#users KeymanagerSecretV1#users}. |

---

##### `project_access`<sup>Optional</sup> <a name="project_access" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.projectAccess"></a>

```python
project_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#project_access KeymanagerSecretV1#project_access}.

---

##### `users`<sup>Optional</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#users KeymanagerSecretV1#users}.

---

### KeymanagerSecretV1Config <a name="KeymanagerSecretV1Config" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  acl: KeymanagerSecretV1Acl = None,
  algorithm: str = None,
  bit_length: typing.Union[int, float] = None,
  expiration: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  mode: str = None,
  name: str = None,
  payload: str = None,
  payload_content_encoding: str = None,
  payload_content_type: str = None,
  region: str = None,
  secret_type: str = None,
  timeouts: KeymanagerSecretV1Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a></code> | acl block. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#algorithm KeymanagerSecretV1#algorithm}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.bitLength">bit_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#bit_length KeymanagerSecretV1#bit_length}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.expiration">expiration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#expiration KeymanagerSecretV1#expiration}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#id KeymanagerSecretV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#metadata KeymanagerSecretV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#mode KeymanagerSecretV1#mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#name KeymanagerSecretV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload KeymanagerSecretV1#payload}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentEncoding">payload_content_encoding</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_encoding KeymanagerSecretV1#payload_content_encoding}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentType">payload_content_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_type KeymanagerSecretV1#payload_content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#region KeymanagerSecretV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.secretType">secret_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#secret_type KeymanagerSecretV1#secret_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.acl"></a>

```python
acl: KeymanagerSecretV1Acl
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#acl KeymanagerSecretV1#acl}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#algorithm KeymanagerSecretV1#algorithm}.

---

##### `bit_length`<sup>Optional</sup> <a name="bit_length" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.bitLength"></a>

```python
bit_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#bit_length KeymanagerSecretV1#bit_length}.

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.expiration"></a>

```python
expiration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#expiration KeymanagerSecretV1#expiration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#id KeymanagerSecretV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#metadata KeymanagerSecretV1#metadata}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#mode KeymanagerSecretV1#mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#name KeymanagerSecretV1#name}.

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payload"></a>

```python
payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload KeymanagerSecretV1#payload}.

---

##### `payload_content_encoding`<sup>Optional</sup> <a name="payload_content_encoding" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentEncoding"></a>

```python
payload_content_encoding: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_encoding KeymanagerSecretV1#payload_content_encoding}.

---

##### `payload_content_type`<sup>Optional</sup> <a name="payload_content_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.payloadContentType"></a>

```python
payload_content_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#payload_content_type KeymanagerSecretV1#payload_content_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#region KeymanagerSecretV1#region}.

---

##### `secret_type`<sup>Optional</sup> <a name="secret_type" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.secretType"></a>

```python
secret_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#secret_type KeymanagerSecretV1#secret_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Config.property.timeouts"></a>

```python
timeouts: KeymanagerSecretV1Timeouts
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#timeouts KeymanagerSecretV1#timeouts}

---

### KeymanagerSecretV1Timeouts <a name="KeymanagerSecretV1Timeouts" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#create KeymanagerSecretV1#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#delete KeymanagerSecretV1#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#update KeymanagerSecretV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#create KeymanagerSecretV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#delete KeymanagerSecretV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#update KeymanagerSecretV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeymanagerSecretV1AclOutputReference <a name="KeymanagerSecretV1AclOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1AclOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.putRead">put_read</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_read` <a name="put_read" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.putRead"></a>

```python
def put_read(
  project_access: typing.Union[bool, IResolvable] = None,
  users: typing.List[str] = None
) -> None
```

###### `project_access`<sup>Optional</sup> <a name="project_access" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.putRead.parameter.projectAccess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#project_access KeymanagerSecretV1#project_access}.

---

###### `users`<sup>Optional</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.putRead.parameter.users"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/keymanager_secret_v1#users KeymanagerSecretV1#users}.

---

##### `reset_read` <a name="reset_read" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference">KeymanagerSecretV1AclReadOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.readInput">read_input</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.read"></a>

```python
read: KeymanagerSecretV1AclReadOutputReference
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference">KeymanagerSecretV1AclReadOutputReference</a>

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.readInput"></a>

```python
read_input: KeymanagerSecretV1AclRead
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclOutputReference.property.internalValue"></a>

```python
internal_value: KeymanagerSecretV1Acl
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Acl">KeymanagerSecretV1Acl</a>

---


### KeymanagerSecretV1AclReadOutputReference <a name="KeymanagerSecretV1AclReadOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetProjectAccess">reset_project_access</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetUsers">reset_users</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_project_access` <a name="reset_project_access" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetProjectAccess"></a>

```python
def reset_project_access() -> None
```

##### `reset_users` <a name="reset_users" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.resetUsers"></a>

```python
def reset_users() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccessInput">project_access_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccess">project_access</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `project_access_input`<sup>Optional</sup> <a name="project_access_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccessInput"></a>

```python
project_access_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `project_access`<sup>Required</sup> <a name="project_access" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.projectAccess"></a>

```python
project_access: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `users`<sup>Required</sup> <a name="users" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclReadOutputReference.property.internalValue"></a>

```python
internal_value: KeymanagerSecretV1AclRead
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1AclRead">KeymanagerSecretV1AclRead</a>

---


### KeymanagerSecretV1TimeoutsOutputReference <a name="KeymanagerSecretV1TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer"></a>

```python
from thpham_cdktf_provider_openstack import keymanager_secret_v1

keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KeymanagerSecretV1Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@ithings/cdktf-provider-openstack.keymanagerSecretV1.KeymanagerSecretV1Timeouts">KeymanagerSecretV1Timeouts</a>]

---




# `dataOpenstackFwGroupV2` Submodule <a name="`dataOpenstackFwGroupV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackFwGroupV2 <a name="DataOpenstackFwGroupV2" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2 openstack_fw_group_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.Initializer"></a>

```typescript
import { dataOpenstackFwGroupV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackFwGroupV2.DataOpenstackFwGroupV2(scope: Construct, id: string, config?: DataOpenstackFwGroupV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config">DataOpenstackFwGroupV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config">DataOpenstackFwGroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetEgressFirewallPolicyId">resetEgressFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetIngressFirewallPolicyId">resetIngressFirewallPolicyId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetShared">resetShared</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEgressFirewallPolicyId` <a name="resetEgressFirewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetEgressFirewallPolicyId"></a>

```typescript
public resetEgressFirewallPolicyId(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngressFirewallPolicyId` <a name="resetIngressFirewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetIngressFirewallPolicyId"></a>

```typescript
public resetIngressFirewallPolicyId(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetShared` <a name="resetShared" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetShared"></a>

```typescript
public resetShared(): void
```

##### `resetStatus` <a name="resetStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackFwGroupV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isConstruct"></a>

```typescript
import { dataOpenstackFwGroupV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformElement"></a>

```typescript
import { dataOpenstackFwGroupV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackFwGroupV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackFwGroupV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackFwGroupV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackFwGroupV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackFwGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackFwGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.egressFirewallPolicyIdInput">egressFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.ingressFirewallPolicyIdInput">ingressFirewallPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.sharedInput">sharedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.egressFirewallPolicyId">egressFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.ingressFirewallPolicyId">ingressFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ports`<sup>Required</sup> <a name="ports" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `egressFirewallPolicyIdInput`<sup>Optional</sup> <a name="egressFirewallPolicyIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.egressFirewallPolicyIdInput"></a>

```typescript
public readonly egressFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressFirewallPolicyIdInput`<sup>Optional</sup> <a name="ingressFirewallPolicyIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.ingressFirewallPolicyIdInput"></a>

```typescript
public readonly ingressFirewallPolicyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sharedInput`<sup>Optional</sup> <a name="sharedInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.sharedInput"></a>

```typescript
public readonly sharedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `egressFirewallPolicyId`<sup>Required</sup> <a name="egressFirewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.egressFirewallPolicyId"></a>

```typescript
public readonly egressFirewallPolicyId: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressFirewallPolicyId`<sup>Required</sup> <a name="ingressFirewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.ingressFirewallPolicyId"></a>

```typescript
public readonly ingressFirewallPolicyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackFwGroupV2Config <a name="DataOpenstackFwGroupV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.Initializer"></a>

```typescript
import { dataOpenstackFwGroupV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackFwGroupV2Config: dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#admin_state_up DataOpenstackFwGroupV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#description DataOpenstackFwGroupV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.egressFirewallPolicyId">egressFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#egress_firewall_policy_id DataOpenstackFwGroupV2#egress_firewall_policy_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#group_id DataOpenstackFwGroupV2#group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#id DataOpenstackFwGroupV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.ingressFirewallPolicyId">ingressFirewallPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#ingress_firewall_policy_id DataOpenstackFwGroupV2#ingress_firewall_policy_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#name DataOpenstackFwGroupV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#project_id DataOpenstackFwGroupV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#region DataOpenstackFwGroupV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.shared">shared</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#shared DataOpenstackFwGroupV2#shared}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#status DataOpenstackFwGroupV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#tenant_id DataOpenstackFwGroupV2#tenant_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#admin_state_up DataOpenstackFwGroupV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#description DataOpenstackFwGroupV2#description}.

---

##### `egressFirewallPolicyId`<sup>Optional</sup> <a name="egressFirewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.egressFirewallPolicyId"></a>

```typescript
public readonly egressFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#egress_firewall_policy_id DataOpenstackFwGroupV2#egress_firewall_policy_id}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#group_id DataOpenstackFwGroupV2#group_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#id DataOpenstackFwGroupV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressFirewallPolicyId`<sup>Optional</sup> <a name="ingressFirewallPolicyId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.ingressFirewallPolicyId"></a>

```typescript
public readonly ingressFirewallPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#ingress_firewall_policy_id DataOpenstackFwGroupV2#ingress_firewall_policy_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#name DataOpenstackFwGroupV2#name}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#project_id DataOpenstackFwGroupV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#region DataOpenstackFwGroupV2#region}.

---

##### `shared`<sup>Optional</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.shared"></a>

```typescript
public readonly shared: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#shared DataOpenstackFwGroupV2#shared}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#status DataOpenstackFwGroupV2#status}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackFwGroupV2.DataOpenstackFwGroupV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/fw_group_v2#tenant_id DataOpenstackFwGroupV2#tenant_id}.

---




# `dataOpenstackNetworkingPortV2` Submodule <a name="`dataOpenstackNetworkingPortV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingPortV2 <a name="DataOpenstackNetworkingPortV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2 openstack_networking_port_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2(scope: Construct, id: string, config?: DataOpenstackNetworkingPortV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config">DataOpenstackNetworkingPortV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config">DataOpenstackNetworkingPortV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDeviceOwner">resetDeviceOwner</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetFixedIp">resetFixedIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetPortId">resetPortId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetDeviceOwner` <a name="resetDeviceOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDeviceOwner"></a>

```typescript
public resetDeviceOwner(): void
```

##### `resetDnsName` <a name="resetDnsName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetFixedIp` <a name="resetFixedIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetFixedIp"></a>

```typescript
public resetFixedIp(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMacAddress` <a name="resetMacAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetMacAddress"></a>

```typescript
public resetMacAddress(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetPortId` <a name="resetPortId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetPortId"></a>

```typescript
public resetPortId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetStatus` <a name="resetStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingPortV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isConstruct"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformElement"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackNetworkingPortV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackNetworkingPortV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackNetworkingPortV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingPortV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allFixedIps">allFixedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allowedAddressPairs">allowedAddressPairs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList">DataOpenstackNetworkingPortV2AllowedAddressPairsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allSecurityGroupIds">allSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.binding">binding</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList">DataOpenstackNetworkingPortV2BindingList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dnsAssignment">dnsAssignment</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.extraDhcpOption">extraDhcpOption</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList">DataOpenstackNetworkingPortV2ExtraDhcpOptionList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceOwnerInput">deviceOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.fixedIpInput">fixedIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.macAddressInput">macAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.portIdInput">portIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceOwner">deviceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.fixedIp">fixedIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.portId">portId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allFixedIps`<sup>Required</sup> <a name="allFixedIps" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allFixedIps"></a>

```typescript
public readonly allFixedIps: string[];
```

- *Type:* string[]

---

##### `allowedAddressPairs`<sup>Required</sup> <a name="allowedAddressPairs" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allowedAddressPairs"></a>

```typescript
public readonly allowedAddressPairs: DataOpenstackNetworkingPortV2AllowedAddressPairsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList">DataOpenstackNetworkingPortV2AllowedAddressPairsList</a>

---

##### `allSecurityGroupIds`<sup>Required</sup> <a name="allSecurityGroupIds" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allSecurityGroupIds"></a>

```typescript
public readonly allSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `binding`<sup>Required</sup> <a name="binding" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.binding"></a>

```typescript
public readonly binding: DataOpenstackNetworkingPortV2BindingList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList">DataOpenstackNetworkingPortV2BindingList</a>

---

##### `dnsAssignment`<sup>Required</sup> <a name="dnsAssignment" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dnsAssignment"></a>

```typescript
public readonly dnsAssignment: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `extraDhcpOption`<sup>Required</sup> <a name="extraDhcpOption" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.extraDhcpOption"></a>

```typescript
public readonly extraDhcpOption: DataOpenstackNetworkingPortV2ExtraDhcpOptionList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList">DataOpenstackNetworkingPortV2ExtraDhcpOptionList</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `deviceOwnerInput`<sup>Optional</sup> <a name="deviceOwnerInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceOwnerInput"></a>

```typescript
public readonly deviceOwnerInput: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `fixedIpInput`<sup>Optional</sup> <a name="fixedIpInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.fixedIpInput"></a>

```typescript
public readonly fixedIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.macAddressInput"></a>

```typescript
public readonly macAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `portIdInput`<sup>Optional</sup> <a name="portIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.portIdInput"></a>

```typescript
public readonly portIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `deviceOwner`<sup>Required</sup> <a name="deviceOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.deviceOwner"></a>

```typescript
public readonly deviceOwner: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `fixedIp`<sup>Required</sup> <a name="fixedIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.fixedIp"></a>

```typescript
public readonly fixedIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `portId`<sup>Required</sup> <a name="portId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingPortV2AllowedAddressPairs <a name="DataOpenstackNetworkingPortV2AllowedAddressPairs" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairs.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingPortV2AllowedAddressPairs: dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairs = { ... }
```


### DataOpenstackNetworkingPortV2Binding <a name="DataOpenstackNetworkingPortV2Binding" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Binding"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Binding.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingPortV2Binding: dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Binding = { ... }
```


### DataOpenstackNetworkingPortV2Config <a name="DataOpenstackNetworkingPortV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingPortV2Config: dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#admin_state_up DataOpenstackNetworkingPortV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#description DataOpenstackNetworkingPortV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#device_id DataOpenstackNetworkingPortV2#device_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.deviceOwner">deviceOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#device_owner DataOpenstackNetworkingPortV2#device_owner}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#dns_name DataOpenstackNetworkingPortV2#dns_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.fixedIp">fixedIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#fixed_ip DataOpenstackNetworkingPortV2#fixed_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#id DataOpenstackNetworkingPortV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.macAddress">macAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#mac_address DataOpenstackNetworkingPortV2#mac_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#name DataOpenstackNetworkingPortV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#network_id DataOpenstackNetworkingPortV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.portId">portId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#port_id DataOpenstackNetworkingPortV2#port_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#project_id DataOpenstackNetworkingPortV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#region DataOpenstackNetworkingPortV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#security_group_ids DataOpenstackNetworkingPortV2#security_group_ids}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#status DataOpenstackNetworkingPortV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#tags DataOpenstackNetworkingPortV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#tenant_id DataOpenstackNetworkingPortV2#tenant_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#admin_state_up DataOpenstackNetworkingPortV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#description DataOpenstackNetworkingPortV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#device_id DataOpenstackNetworkingPortV2#device_id}.

---

##### `deviceOwner`<sup>Optional</sup> <a name="deviceOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.deviceOwner"></a>

```typescript
public readonly deviceOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#device_owner DataOpenstackNetworkingPortV2#device_owner}.

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#dns_name DataOpenstackNetworkingPortV2#dns_name}.

---

##### `fixedIp`<sup>Optional</sup> <a name="fixedIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.fixedIp"></a>

```typescript
public readonly fixedIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#fixed_ip DataOpenstackNetworkingPortV2#fixed_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#id DataOpenstackNetworkingPortV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#mac_address DataOpenstackNetworkingPortV2#mac_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#name DataOpenstackNetworkingPortV2#name}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#network_id DataOpenstackNetworkingPortV2#network_id}.

---

##### `portId`<sup>Optional</sup> <a name="portId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.portId"></a>

```typescript
public readonly portId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#port_id DataOpenstackNetworkingPortV2#port_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#project_id DataOpenstackNetworkingPortV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#region DataOpenstackNetworkingPortV2#region}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#security_group_ids DataOpenstackNetworkingPortV2#security_group_ids}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#status DataOpenstackNetworkingPortV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#tags DataOpenstackNetworkingPortV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_v2#tenant_id DataOpenstackNetworkingPortV2#tenant_id}.

---

### DataOpenstackNetworkingPortV2ExtraDhcpOption <a name="DataOpenstackNetworkingPortV2ExtraDhcpOption" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOption"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOption.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingPortV2ExtraDhcpOption: dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOption = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackNetworkingPortV2AllowedAddressPairsList <a name="DataOpenstackNetworkingPortV2AllowedAddressPairsList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.get"></a>

```typescript
public get(index: number): DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference <a name="DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairs">DataOpenstackNetworkingPortV2AllowedAddressPairs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackNetworkingPortV2AllowedAddressPairs;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2AllowedAddressPairs">DataOpenstackNetworkingPortV2AllowedAddressPairs</a>

---


### DataOpenstackNetworkingPortV2BindingList <a name="DataOpenstackNetworkingPortV2BindingList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.get"></a>

```typescript
public get(index: number): DataOpenstackNetworkingPortV2BindingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackNetworkingPortV2BindingOutputReference <a name="DataOpenstackNetworkingPortV2BindingOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.vifDetails">vifDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.vifType">vifType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.vnicType">vnicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Binding">DataOpenstackNetworkingPortV2Binding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `vifDetails`<sup>Required</sup> <a name="vifDetails" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.vifDetails"></a>

```typescript
public readonly vifDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `vifType`<sup>Required</sup> <a name="vifType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.vifType"></a>

```typescript
public readonly vifType: string;
```

- *Type:* string

---

##### `vnicType`<sup>Required</sup> <a name="vnicType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.vnicType"></a>

```typescript
public readonly vnicType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2BindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackNetworkingPortV2Binding;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2Binding">DataOpenstackNetworkingPortV2Binding</a>

---


### DataOpenstackNetworkingPortV2ExtraDhcpOptionList <a name="DataOpenstackNetworkingPortV2ExtraDhcpOptionList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.get"></a>

```typescript
public get(index: number): DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference <a name="DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOption">DataOpenstackNetworkingPortV2ExtraDhcpOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackNetworkingPortV2ExtraDhcpOption;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortV2.DataOpenstackNetworkingPortV2ExtraDhcpOption">DataOpenstackNetworkingPortV2ExtraDhcpOption</a>

---




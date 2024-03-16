# `dataOpenstackNetworkingPortIdsV2` Submodule <a name="`dataOpenstackNetworkingPortIdsV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingPortIdsV2 <a name="DataOpenstackNetworkingPortIdsV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2 openstack_networking_port_ids_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortIdsV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2(scope: Construct, id: string, config?: DataOpenstackNetworkingPortIdsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config">DataOpenstackNetworkingPortIdsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config">DataOpenstackNetworkingPortIdsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDeviceOwner">resetDeviceOwner</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetFixedIp">resetFixedIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetSortDirection">resetSortDirection</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetSortKey">resetSortKey</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetDeviceOwner` <a name="resetDeviceOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDeviceOwner"></a>

```typescript
public resetDeviceOwner(): void
```

##### `resetDnsName` <a name="resetDnsName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetFixedIp` <a name="resetFixedIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetFixedIp"></a>

```typescript
public resetFixedIp(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMacAddress` <a name="resetMacAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetMacAddress"></a>

```typescript
public resetMacAddress(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSortDirection` <a name="resetSortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetSortDirection"></a>

```typescript
public resetSortDirection(): void
```

##### `resetSortKey` <a name="resetSortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetSortKey"></a>

```typescript
public resetSortKey(): void
```

##### `resetStatus` <a name="resetStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingPortIdsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isConstruct"></a>

```typescript
import { dataOpenstackNetworkingPortIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformElement"></a>

```typescript
import { dataOpenstackNetworkingPortIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackNetworkingPortIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackNetworkingPortIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackNetworkingPortIdsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackNetworkingPortIdsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackNetworkingPortIdsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingPortIdsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceOwnerInput">deviceOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.fixedIpInput">fixedIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.macAddressInput">macAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortDirectionInput">sortDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortKeyInput">sortKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceOwner">deviceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.fixedIp">fixedIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortDirection">sortDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortKey">sortKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `deviceOwnerInput`<sup>Optional</sup> <a name="deviceOwnerInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceOwnerInput"></a>

```typescript
public readonly deviceOwnerInput: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `fixedIpInput`<sup>Optional</sup> <a name="fixedIpInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.fixedIpInput"></a>

```typescript
public readonly fixedIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.macAddressInput"></a>

```typescript
public readonly macAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `sortDirectionInput`<sup>Optional</sup> <a name="sortDirectionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortDirectionInput"></a>

```typescript
public readonly sortDirectionInput: string;
```

- *Type:* string

---

##### `sortKeyInput`<sup>Optional</sup> <a name="sortKeyInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortKeyInput"></a>

```typescript
public readonly sortKeyInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `deviceOwner`<sup>Required</sup> <a name="deviceOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.deviceOwner"></a>

```typescript
public readonly deviceOwner: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `fixedIp`<sup>Required</sup> <a name="fixedIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.fixedIp"></a>

```typescript
public readonly fixedIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `sortDirection`<sup>Required</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

---

##### `sortKey`<sup>Required</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingPortIdsV2Config <a name="DataOpenstackNetworkingPortIdsV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.Initializer"></a>

```typescript
import { dataOpenstackNetworkingPortIdsV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingPortIdsV2Config: dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#admin_state_up DataOpenstackNetworkingPortIdsV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#description DataOpenstackNetworkingPortIdsV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#device_id DataOpenstackNetworkingPortIdsV2#device_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.deviceOwner">deviceOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#device_owner DataOpenstackNetworkingPortIdsV2#device_owner}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#dns_name DataOpenstackNetworkingPortIdsV2#dns_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.fixedIp">fixedIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpenstackNetworkingPortIdsV2#fixed_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#id DataOpenstackNetworkingPortIdsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.macAddress">macAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#mac_address DataOpenstackNetworkingPortIdsV2#mac_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#name DataOpenstackNetworkingPortIdsV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#network_id DataOpenstackNetworkingPortIdsV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#project_id DataOpenstackNetworkingPortIdsV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#region DataOpenstackNetworkingPortIdsV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpenstackNetworkingPortIdsV2#security_group_ids}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.sortDirection">sortDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#sort_direction DataOpenstackNetworkingPortIdsV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.sortKey">sortKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#sort_key DataOpenstackNetworkingPortIdsV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#status DataOpenstackNetworkingPortIdsV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#tags DataOpenstackNetworkingPortIdsV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#tenant_id DataOpenstackNetworkingPortIdsV2#tenant_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#admin_state_up DataOpenstackNetworkingPortIdsV2#admin_state_up}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#description DataOpenstackNetworkingPortIdsV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#device_id DataOpenstackNetworkingPortIdsV2#device_id}.

---

##### `deviceOwner`<sup>Optional</sup> <a name="deviceOwner" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.deviceOwner"></a>

```typescript
public readonly deviceOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#device_owner DataOpenstackNetworkingPortIdsV2#device_owner}.

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#dns_name DataOpenstackNetworkingPortIdsV2#dns_name}.

---

##### `fixedIp`<sup>Optional</sup> <a name="fixedIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.fixedIp"></a>

```typescript
public readonly fixedIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#fixed_ip DataOpenstackNetworkingPortIdsV2#fixed_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#id DataOpenstackNetworkingPortIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#mac_address DataOpenstackNetworkingPortIdsV2#mac_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#name DataOpenstackNetworkingPortIdsV2#name}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#network_id DataOpenstackNetworkingPortIdsV2#network_id}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#project_id DataOpenstackNetworkingPortIdsV2#project_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#region DataOpenstackNetworkingPortIdsV2#region}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#security_group_ids DataOpenstackNetworkingPortIdsV2#security_group_ids}.

---

##### `sortDirection`<sup>Optional</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#sort_direction DataOpenstackNetworkingPortIdsV2#sort_direction}.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#sort_key DataOpenstackNetworkingPortIdsV2#sort_key}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#status DataOpenstackNetworkingPortIdsV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#tags DataOpenstackNetworkingPortIdsV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingPortIdsV2.DataOpenstackNetworkingPortIdsV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_port_ids_v2#tenant_id DataOpenstackNetworkingPortIdsV2#tenant_id}.

---




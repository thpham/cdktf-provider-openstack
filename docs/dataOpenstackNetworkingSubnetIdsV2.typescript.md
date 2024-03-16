# `dataOpenstackNetworkingSubnetIdsV2` Submodule <a name="`dataOpenstackNetworkingSubnetIdsV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingSubnetIdsV2 <a name="DataOpenstackNetworkingSubnetIdsV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2 openstack_networking_subnet_ids_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetIdsV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2(scope: Construct, id: string, config?: DataOpenstackNetworkingSubnetIdsV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config">DataOpenstackNetworkingSubnetIdsV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config">DataOpenstackNetworkingSubnetIdsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDhcpEnabled">resetDhcpEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetGatewayIp">resetGatewayIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6AddressMode">resetIpv6AddressMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6RaMode">resetIpv6RaMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortDirection">resetSortDirection</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortKey">resetSortKey</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSubnetpoolId">resetSubnetpoolId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCidr` <a name="resetCidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDhcpEnabled` <a name="resetDhcpEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetDhcpEnabled"></a>

```typescript
public resetDhcpEnabled(): void
```

##### `resetGatewayIp` <a name="resetGatewayIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetGatewayIp"></a>

```typescript
public resetGatewayIp(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6AddressMode` <a name="resetIpv6AddressMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6AddressMode"></a>

```typescript
public resetIpv6AddressMode(): void
```

##### `resetIpv6RaMode` <a name="resetIpv6RaMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpv6RaMode"></a>

```typescript
public resetIpv6RaMode(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNameRegex` <a name="resetNameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNameRegex"></a>

```typescript
public resetNameRegex(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSortDirection` <a name="resetSortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortDirection"></a>

```typescript
public resetSortDirection(): void
```

##### `resetSortKey` <a name="resetSortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSortKey"></a>

```typescript
public resetSortKey(): void
```

##### `resetSubnetpoolId` <a name="resetSubnetpoolId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetSubnetpoolId"></a>

```typescript
public resetSubnetpoolId(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingSubnetIdsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isConstruct"></a>

```typescript
import { dataOpenstackNetworkingSubnetIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformElement"></a>

```typescript
import { dataOpenstackNetworkingSubnetIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackNetworkingSubnetIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackNetworkingSubnetIdsV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackNetworkingSubnetIdsV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackNetworkingSubnetIdsV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackNetworkingSubnetIdsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingSubnetIdsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabledInput">dhcpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIpInput">gatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressModeInput">ipv6AddressModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaModeInput">ipv6RaModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersionInput">ipVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegexInput">nameRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirectionInput">sortDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKeyInput">sortKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolIdInput">subnetpoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabled">dhcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressMode">ipv6AddressMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaMode">ipv6RaMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegex">nameRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirection">sortDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKey">sortKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolId">subnetpoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `ids`<sup>Required</sup> <a name="ids" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dhcpEnabledInput`<sup>Optional</sup> <a name="dhcpEnabledInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabledInput"></a>

```typescript
public readonly dhcpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIpInput"></a>

```typescript
public readonly gatewayIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6AddressModeInput`<sup>Optional</sup> <a name="ipv6AddressModeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressModeInput"></a>

```typescript
public readonly ipv6AddressModeInput: string;
```

- *Type:* string

---

##### `ipv6RaModeInput`<sup>Optional</sup> <a name="ipv6RaModeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaModeInput"></a>

```typescript
public readonly ipv6RaModeInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegexInput"></a>

```typescript
public readonly nameRegexInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sortDirectionInput`<sup>Optional</sup> <a name="sortDirectionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirectionInput"></a>

```typescript
public readonly sortDirectionInput: string;
```

- *Type:* string

---

##### `sortKeyInput`<sup>Optional</sup> <a name="sortKeyInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKeyInput"></a>

```typescript
public readonly sortKeyInput: string;
```

- *Type:* string

---

##### `subnetpoolIdInput`<sup>Optional</sup> <a name="subnetpoolIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolIdInput"></a>

```typescript
public readonly subnetpoolIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dhcpEnabled`<sup>Required</sup> <a name="dhcpEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.dhcpEnabled"></a>

```typescript
public readonly dhcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6AddressMode`<sup>Required</sup> <a name="ipv6AddressMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6AddressMode"></a>

```typescript
public readonly ipv6AddressMode: string;
```

- *Type:* string

---

##### `ipv6RaMode`<sup>Required</sup> <a name="ipv6RaMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipv6RaMode"></a>

```typescript
public readonly ipv6RaMode: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sortDirection`<sup>Required</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

---

##### `sortKey`<sup>Required</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

---

##### `subnetpoolId`<sup>Required</sup> <a name="subnetpoolId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.subnetpoolId"></a>

```typescript
public readonly subnetpoolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingSubnetIdsV2Config <a name="DataOpenstackNetworkingSubnetIdsV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetIdsV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingSubnetIdsV2Config: dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#cidr DataOpenstackNetworkingSubnetIdsV2#cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#description DataOpenstackNetworkingSubnetIdsV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dhcpEnabled">dhcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#dhcp_enabled DataOpenstackNetworkingSubnetIdsV2#dhcp_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#gateway_ip DataOpenstackNetworkingSubnetIdsV2#gateway_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#id DataOpenstackNetworkingSubnetIdsV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6AddressMode">ipv6AddressMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_address_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_address_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6RaMode">ipv6RaMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_ra_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipVersion">ipVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ip_version DataOpenstackNetworkingSubnetIdsV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name DataOpenstackNetworkingSubnetIdsV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.nameRegex">nameRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name_regex DataOpenstackNetworkingSubnetIdsV2#name_regex}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#network_id DataOpenstackNetworkingSubnetIdsV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#region DataOpenstackNetworkingSubnetIdsV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortDirection">sortDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_direction DataOpenstackNetworkingSubnetIdsV2#sort_direction}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortKey">sortKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_key DataOpenstackNetworkingSubnetIdsV2#sort_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.subnetpoolId">subnetpoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#subnetpool_id DataOpenstackNetworkingSubnetIdsV2#subnetpool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tags DataOpenstackNetworkingSubnetIdsV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#cidr DataOpenstackNetworkingSubnetIdsV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#description DataOpenstackNetworkingSubnetIdsV2#description}.

---

##### `dhcpEnabled`<sup>Optional</sup> <a name="dhcpEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.dhcpEnabled"></a>

```typescript
public readonly dhcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#dhcp_enabled DataOpenstackNetworkingSubnetIdsV2#dhcp_enabled}.

---

##### `gatewayIp`<sup>Optional</sup> <a name="gatewayIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#gateway_ip DataOpenstackNetworkingSubnetIdsV2#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#id DataOpenstackNetworkingSubnetIdsV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6AddressMode`<sup>Optional</sup> <a name="ipv6AddressMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6AddressMode"></a>

```typescript
public readonly ipv6AddressMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_address_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_address_mode}.

---

##### `ipv6RaMode`<sup>Optional</sup> <a name="ipv6RaMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipv6RaMode"></a>

```typescript
public readonly ipv6RaMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetIdsV2#ipv6_ra_mode}.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#ip_version DataOpenstackNetworkingSubnetIdsV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name DataOpenstackNetworkingSubnetIdsV2#name}.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.nameRegex"></a>

```typescript
public readonly nameRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#name_regex DataOpenstackNetworkingSubnetIdsV2#name_regex}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#network_id DataOpenstackNetworkingSubnetIdsV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#region DataOpenstackNetworkingSubnetIdsV2#region}.

---

##### `sortDirection`<sup>Optional</sup> <a name="sortDirection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortDirection"></a>

```typescript
public readonly sortDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_direction DataOpenstackNetworkingSubnetIdsV2#sort_direction}.

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.sortKey"></a>

```typescript
public readonly sortKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#sort_key DataOpenstackNetworkingSubnetIdsV2#sort_key}.

---

##### `subnetpoolId`<sup>Optional</sup> <a name="subnetpoolId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.subnetpoolId"></a>

```typescript
public readonly subnetpoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#subnetpool_id DataOpenstackNetworkingSubnetIdsV2#subnetpool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tags DataOpenstackNetworkingSubnetIdsV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetIdsV2.DataOpenstackNetworkingSubnetIdsV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_ids_v2#tenant_id DataOpenstackNetworkingSubnetIdsV2#tenant_id}

---




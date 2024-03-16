# `dataOpenstackNetworkingSubnetV2` Submodule <a name="`dataOpenstackNetworkingSubnetV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingSubnetV2 <a name="DataOpenstackNetworkingSubnetV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2 openstack_networking_subnet_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2(scope: Construct, id: string, config?: DataOpenstackNetworkingSubnetV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config">DataOpenstackNetworkingSubnetV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config">DataOpenstackNetworkingSubnetV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpDisabled">resetDhcpDisabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpEnabled">resetDhcpEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetGatewayIp">resetGatewayIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6AddressMode">resetIpv6AddressMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6RaMode">resetIpv6RaMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetpoolId">resetSubnetpoolId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTenantId">resetTenantId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCidr` <a name="resetCidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDhcpDisabled` <a name="resetDhcpDisabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpDisabled"></a>

```typescript
public resetDhcpDisabled(): void
```

##### `resetDhcpEnabled` <a name="resetDhcpEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetDhcpEnabled"></a>

```typescript
public resetDhcpEnabled(): void
```

##### `resetGatewayIp` <a name="resetGatewayIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetGatewayIp"></a>

```typescript
public resetGatewayIp(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpv6AddressMode` <a name="resetIpv6AddressMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6AddressMode"></a>

```typescript
public resetIpv6AddressMode(): void
```

##### `resetIpv6RaMode` <a name="resetIpv6RaMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpv6RaMode"></a>

```typescript
public resetIpv6RaMode(): void
```

##### `resetIpVersion` <a name="resetIpVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetSubnetpoolId` <a name="resetSubnetpoolId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetSubnetpoolId"></a>

```typescript
public resetSubnetpoolId(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingSubnetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isConstruct"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformElement"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackNetworkingSubnetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackNetworkingSubnetV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackNetworkingSubnetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingSubnetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allocationPools">allocationPools</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList">DataOpenstackNetworkingSubnetV2AllocationPoolsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dnsNameservers">dnsNameservers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.enableDhcp">enableDhcp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.hostRoutes">hostRoutes</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList">DataOpenstackNetworkingSubnetV2HostRoutesList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.serviceTypes">serviceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabledInput">dhcpDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabledInput">dhcpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIpInput">gatewayIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressModeInput">ipv6AddressModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaModeInput">ipv6RaModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersionInput">ipVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolIdInput">subnetpoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabled">dhcpDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabled">dhcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressMode">ipv6AddressMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaMode">ipv6RaMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolId">subnetpoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `allocationPools`<sup>Required</sup> <a name="allocationPools" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allocationPools"></a>

```typescript
public readonly allocationPools: DataOpenstackNetworkingSubnetV2AllocationPoolsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList">DataOpenstackNetworkingSubnetV2AllocationPoolsList</a>

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `dnsNameservers`<sup>Required</sup> <a name="dnsNameservers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dnsNameservers"></a>

```typescript
public readonly dnsNameservers: string[];
```

- *Type:* string[]

---

##### `enableDhcp`<sup>Required</sup> <a name="enableDhcp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.enableDhcp"></a>

```typescript
public readonly enableDhcp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `hostRoutes`<sup>Required</sup> <a name="hostRoutes" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.hostRoutes"></a>

```typescript
public readonly hostRoutes: DataOpenstackNetworkingSubnetV2HostRoutesList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList">DataOpenstackNetworkingSubnetV2HostRoutesList</a>

---

##### `serviceTypes`<sup>Required</sup> <a name="serviceTypes" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.serviceTypes"></a>

```typescript
public readonly serviceTypes: string[];
```

- *Type:* string[]

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dhcpDisabledInput`<sup>Optional</sup> <a name="dhcpDisabledInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabledInput"></a>

```typescript
public readonly dhcpDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcpEnabledInput`<sup>Optional</sup> <a name="dhcpEnabledInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabledInput"></a>

```typescript
public readonly dhcpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIpInput"></a>

```typescript
public readonly gatewayIpInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipv6AddressModeInput`<sup>Optional</sup> <a name="ipv6AddressModeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressModeInput"></a>

```typescript
public readonly ipv6AddressModeInput: string;
```

- *Type:* string

---

##### `ipv6RaModeInput`<sup>Optional</sup> <a name="ipv6RaModeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaModeInput"></a>

```typescript
public readonly ipv6RaModeInput: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subnetpoolIdInput`<sup>Optional</sup> <a name="subnetpoolIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolIdInput"></a>

```typescript
public readonly subnetpoolIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dhcpDisabled`<sup>Required</sup> <a name="dhcpDisabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpDisabled"></a>

```typescript
public readonly dhcpDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcpEnabled`<sup>Required</sup> <a name="dhcpEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.dhcpEnabled"></a>

```typescript
public readonly dhcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipv6AddressMode`<sup>Required</sup> <a name="ipv6AddressMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6AddressMode"></a>

```typescript
public readonly ipv6AddressMode: string;
```

- *Type:* string

---

##### `ipv6RaMode`<sup>Required</sup> <a name="ipv6RaMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipv6RaMode"></a>

```typescript
public readonly ipv6RaMode: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subnetpoolId`<sup>Required</sup> <a name="subnetpoolId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.subnetpoolId"></a>

```typescript
public readonly subnetpoolId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingSubnetV2AllocationPools <a name="DataOpenstackNetworkingSubnetV2AllocationPools" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingSubnetV2AllocationPools: dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools = { ... }
```


### DataOpenstackNetworkingSubnetV2Config <a name="DataOpenstackNetworkingSubnetV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingSubnetV2Config: dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#cidr DataOpenstackNetworkingSubnetV2#cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#description DataOpenstackNetworkingSubnetV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpDisabled">dhcpDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_disabled DataOpenstackNetworkingSubnetV2#dhcp_disabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpEnabled">dhcpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_enabled DataOpenstackNetworkingSubnetV2#dhcp_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#gateway_ip DataOpenstackNetworkingSubnetV2#gateway_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#id DataOpenstackNetworkingSubnetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6AddressMode">ipv6AddressMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_address_mode DataOpenstackNetworkingSubnetV2#ipv6_address_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6RaMode">ipv6RaMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetV2#ipv6_ra_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipVersion">ipVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ip_version DataOpenstackNetworkingSubnetV2#ip_version}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#name DataOpenstackNetworkingSubnetV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#network_id DataOpenstackNetworkingSubnetV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#region DataOpenstackNetworkingSubnetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnet_id DataOpenstackNetworkingSubnetV2#subnet_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetpoolId">subnetpoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnetpool_id DataOpenstackNetworkingSubnetV2#subnetpool_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tags DataOpenstackNetworkingSubnetV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#cidr DataOpenstackNetworkingSubnetV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#description DataOpenstackNetworkingSubnetV2#description}.

---

##### `dhcpDisabled`<sup>Optional</sup> <a name="dhcpDisabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpDisabled"></a>

```typescript
public readonly dhcpDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_disabled DataOpenstackNetworkingSubnetV2#dhcp_disabled}.

---

##### `dhcpEnabled`<sup>Optional</sup> <a name="dhcpEnabled" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.dhcpEnabled"></a>

```typescript
public readonly dhcpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#dhcp_enabled DataOpenstackNetworkingSubnetV2#dhcp_enabled}.

---

##### `gatewayIp`<sup>Optional</sup> <a name="gatewayIp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#gateway_ip DataOpenstackNetworkingSubnetV2#gateway_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#id DataOpenstackNetworkingSubnetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipv6AddressMode`<sup>Optional</sup> <a name="ipv6AddressMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6AddressMode"></a>

```typescript
public readonly ipv6AddressMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_address_mode DataOpenstackNetworkingSubnetV2#ipv6_address_mode}.

---

##### `ipv6RaMode`<sup>Optional</sup> <a name="ipv6RaMode" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipv6RaMode"></a>

```typescript
public readonly ipv6RaMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ipv6_ra_mode DataOpenstackNetworkingSubnetV2#ipv6_ra_mode}.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#ip_version DataOpenstackNetworkingSubnetV2#ip_version}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#name DataOpenstackNetworkingSubnetV2#name}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#network_id DataOpenstackNetworkingSubnetV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#region DataOpenstackNetworkingSubnetV2#region}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnet_id DataOpenstackNetworkingSubnetV2#subnet_id}.

---

##### `subnetpoolId`<sup>Optional</sup> <a name="subnetpoolId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.subnetpoolId"></a>

```typescript
public readonly subnetpoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#subnetpool_id DataOpenstackNetworkingSubnetV2#subnetpool_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tags DataOpenstackNetworkingSubnetV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_subnet_v2#tenant_id DataOpenstackNetworkingSubnetV2#tenant_id}

---

### DataOpenstackNetworkingSubnetV2HostRoutes <a name="DataOpenstackNetworkingSubnetV2HostRoutes" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingSubnetV2HostRoutes: dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackNetworkingSubnetV2AllocationPoolsList <a name="DataOpenstackNetworkingSubnetV2AllocationPoolsList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.get"></a>

```typescript
public get(index: number): DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference <a name="DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.end">end</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.start">start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools">DataOpenstackNetworkingSubnetV2AllocationPools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `end`<sup>Required</sup> <a name="end" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.end"></a>

```typescript
public readonly end: string;
```

- *Type:* string

---

##### `start`<sup>Required</sup> <a name="start" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.start"></a>

```typescript
public readonly start: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackNetworkingSubnetV2AllocationPools;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2AllocationPools">DataOpenstackNetworkingSubnetV2AllocationPools</a>

---


### DataOpenstackNetworkingSubnetV2HostRoutesList <a name="DataOpenstackNetworkingSubnetV2HostRoutesList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.get"></a>

```typescript
public get(index: number): DataOpenstackNetworkingSubnetV2HostRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackNetworkingSubnetV2HostRoutesOutputReference <a name="DataOpenstackNetworkingSubnetV2HostRoutesOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer"></a>

```typescript
import { dataOpenstackNetworkingSubnetV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr">destinationCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.nextHop">nextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes">DataOpenstackNetworkingSubnetV2HostRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationCidr`<sup>Required</sup> <a name="destinationCidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.destinationCidr"></a>

```typescript
public readonly destinationCidr: string;
```

- *Type:* string

---

##### `nextHop`<sup>Required</sup> <a name="nextHop" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.nextHop"></a>

```typescript
public readonly nextHop: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackNetworkingSubnetV2HostRoutes;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingSubnetV2.DataOpenstackNetworkingSubnetV2HostRoutes">DataOpenstackNetworkingSubnetV2HostRoutes</a>

---




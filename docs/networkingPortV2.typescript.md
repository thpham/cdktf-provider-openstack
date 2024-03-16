# `networkingPortV2` Submodule <a name="`networkingPortV2` Submodule" id="@ithings/cdktf-provider-openstack.networkingPortV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingPortV2 <a name="NetworkingPortV2" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2 openstack_networking_port_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2(scope: Construct, id: string, config: NetworkingPortV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config">NetworkingPortV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config">NetworkingPortV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putAllowedAddressPairs">putAllowedAddressPairs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putBinding">putBinding</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putExtraDhcpOption">putExtraDhcpOption</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putFixedIp">putFixedIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetAllowedAddressPairs">resetAllowedAddressPairs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetBinding">resetBinding</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDeviceOwner">resetDeviceOwner</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetExtraDhcpOption">resetExtraDhcpOption</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetFixedIp">resetFixedIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetNoFixedIp">resetNoFixedIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetNoSecurityGroups">resetNoSecurityGroups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetPortSecurityEnabled">resetPortSecurityEnabled</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetQosPolicyId">resetQosPolicyId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedAddressPairs` <a name="putAllowedAddressPairs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putAllowedAddressPairs"></a>

```typescript
public putAllowedAddressPairs(value: IResolvable | NetworkingPortV2AllowedAddressPairs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putAllowedAddressPairs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>[]

---

##### `putBinding` <a name="putBinding" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putBinding"></a>

```typescript
public putBinding(value: NetworkingPortV2Binding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putBinding.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding">NetworkingPortV2Binding</a>

---

##### `putExtraDhcpOption` <a name="putExtraDhcpOption" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putExtraDhcpOption"></a>

```typescript
public putExtraDhcpOption(value: IResolvable | NetworkingPortV2ExtraDhcpOption[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putExtraDhcpOption.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>[]

---

##### `putFixedIp` <a name="putFixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putFixedIp"></a>

```typescript
public putFixedIp(value: IResolvable | NetworkingPortV2FixedIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putFixedIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkingPortV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts">NetworkingPortV2Timeouts</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetAllowedAddressPairs` <a name="resetAllowedAddressPairs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetAllowedAddressPairs"></a>

```typescript
public resetAllowedAddressPairs(): void
```

##### `resetBinding` <a name="resetBinding" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetBinding"></a>

```typescript
public resetBinding(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetDeviceOwner` <a name="resetDeviceOwner" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDeviceOwner"></a>

```typescript
public resetDeviceOwner(): void
```

##### `resetDnsName` <a name="resetDnsName" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetExtraDhcpOption` <a name="resetExtraDhcpOption" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetExtraDhcpOption"></a>

```typescript
public resetExtraDhcpOption(): void
```

##### `resetFixedIp` <a name="resetFixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetFixedIp"></a>

```typescript
public resetFixedIp(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMacAddress` <a name="resetMacAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetMacAddress"></a>

```typescript
public resetMacAddress(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNoFixedIp` <a name="resetNoFixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetNoFixedIp"></a>

```typescript
public resetNoFixedIp(): void
```

##### `resetNoSecurityGroups` <a name="resetNoSecurityGroups" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetNoSecurityGroups"></a>

```typescript
public resetNoSecurityGroups(): void
```

##### `resetPortSecurityEnabled` <a name="resetPortSecurityEnabled" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetPortSecurityEnabled"></a>

```typescript
public resetPortSecurityEnabled(): void
```

##### `resetQosPolicyId` <a name="resetQosPolicyId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetQosPolicyId"></a>

```typescript
public resetQosPolicyId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingPortV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isConstruct"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

networkingPortV2.NetworkingPortV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isTerraformElement"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

networkingPortV2.NetworkingPortV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isTerraformResource"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

networkingPortV2.NetworkingPortV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.generateConfigForImport"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

networkingPortV2.NetworkingPortV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkingPortV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkingPortV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkingPortV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingPortV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allFixedIps">allFixedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allowedAddressPairs">allowedAddressPairs</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList">NetworkingPortV2AllowedAddressPairsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allSecurityGroupIds">allSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.binding">binding</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference">NetworkingPortV2BindingOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dnsAssignment">dnsAssignment</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.extraDhcpOption">extraDhcpOption</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList">NetworkingPortV2ExtraDhcpOptionList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.fixedIp">fixedIp</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList">NetworkingPortV2FixedIpList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference">NetworkingPortV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allowedAddressPairsInput">allowedAddressPairsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.bindingInput">bindingInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding">NetworkingPortV2Binding</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceOwnerInput">deviceOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.extraDhcpOptionInput">extraDhcpOptionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.fixedIpInput">fixedIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.macAddressInput">macAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noFixedIpInput">noFixedIpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noSecurityGroupsInput">noSecurityGroupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.portSecurityEnabledInput">portSecurityEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.qosPolicyIdInput">qosPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts">NetworkingPortV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceOwner">deviceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noFixedIp">noFixedIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noSecurityGroups">noSecurityGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.portSecurityEnabled">portSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.qosPolicyId">qosPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allFixedIps`<sup>Required</sup> <a name="allFixedIps" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allFixedIps"></a>

```typescript
public readonly allFixedIps: string[];
```

- *Type:* string[]

---

##### `allowedAddressPairs`<sup>Required</sup> <a name="allowedAddressPairs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allowedAddressPairs"></a>

```typescript
public readonly allowedAddressPairs: NetworkingPortV2AllowedAddressPairsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList">NetworkingPortV2AllowedAddressPairsList</a>

---

##### `allSecurityGroupIds`<sup>Required</sup> <a name="allSecurityGroupIds" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allSecurityGroupIds"></a>

```typescript
public readonly allSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `binding`<sup>Required</sup> <a name="binding" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.binding"></a>

```typescript
public readonly binding: NetworkingPortV2BindingOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference">NetworkingPortV2BindingOutputReference</a>

---

##### `dnsAssignment`<sup>Required</sup> <a name="dnsAssignment" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dnsAssignment"></a>

```typescript
public readonly dnsAssignment: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `extraDhcpOption`<sup>Required</sup> <a name="extraDhcpOption" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.extraDhcpOption"></a>

```typescript
public readonly extraDhcpOption: NetworkingPortV2ExtraDhcpOptionList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList">NetworkingPortV2ExtraDhcpOptionList</a>

---

##### `fixedIp`<sup>Required</sup> <a name="fixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.fixedIp"></a>

```typescript
public readonly fixedIp: NetworkingPortV2FixedIpList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList">NetworkingPortV2FixedIpList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingPortV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference">NetworkingPortV2TimeoutsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowedAddressPairsInput`<sup>Optional</sup> <a name="allowedAddressPairsInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.allowedAddressPairsInput"></a>

```typescript
public readonly allowedAddressPairsInput: IResolvable | NetworkingPortV2AllowedAddressPairs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>[]

---

##### `bindingInput`<sup>Optional</sup> <a name="bindingInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.bindingInput"></a>

```typescript
public readonly bindingInput: NetworkingPortV2Binding;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding">NetworkingPortV2Binding</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `deviceOwnerInput`<sup>Optional</sup> <a name="deviceOwnerInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceOwnerInput"></a>

```typescript
public readonly deviceOwnerInput: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `extraDhcpOptionInput`<sup>Optional</sup> <a name="extraDhcpOptionInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.extraDhcpOptionInput"></a>

```typescript
public readonly extraDhcpOptionInput: IResolvable | NetworkingPortV2ExtraDhcpOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>[]

---

##### `fixedIpInput`<sup>Optional</sup> <a name="fixedIpInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.fixedIpInput"></a>

```typescript
public readonly fixedIpInput: IResolvable | NetworkingPortV2FixedIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.macAddressInput"></a>

```typescript
public readonly macAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `noFixedIpInput`<sup>Optional</sup> <a name="noFixedIpInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noFixedIpInput"></a>

```typescript
public readonly noFixedIpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noSecurityGroupsInput`<sup>Optional</sup> <a name="noSecurityGroupsInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noSecurityGroupsInput"></a>

```typescript
public readonly noSecurityGroupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portSecurityEnabledInput`<sup>Optional</sup> <a name="portSecurityEnabledInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.portSecurityEnabledInput"></a>

```typescript
public readonly portSecurityEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `qosPolicyIdInput`<sup>Optional</sup> <a name="qosPolicyIdInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.qosPolicyIdInput"></a>

```typescript
public readonly qosPolicyIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkingPortV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts">NetworkingPortV2Timeouts</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `deviceOwner`<sup>Required</sup> <a name="deviceOwner" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.deviceOwner"></a>

```typescript
public readonly deviceOwner: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `noFixedIp`<sup>Required</sup> <a name="noFixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noFixedIp"></a>

```typescript
public readonly noFixedIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `noSecurityGroups`<sup>Required</sup> <a name="noSecurityGroups" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.noSecurityGroups"></a>

```typescript
public readonly noSecurityGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `portSecurityEnabled`<sup>Required</sup> <a name="portSecurityEnabled" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.portSecurityEnabled"></a>

```typescript
public readonly portSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `qosPolicyId`<sup>Required</sup> <a name="qosPolicyId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.qosPolicyId"></a>

```typescript
public readonly qosPolicyId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingPortV2AllowedAddressPairs <a name="NetworkingPortV2AllowedAddressPairs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

const networkingPortV2AllowedAddressPairs: networkingPortV2.NetworkingPortV2AllowedAddressPairs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#ip_address NetworkingPortV2#ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs.property.macAddress">macAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#mac_address NetworkingPortV2#mac_address}. |

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#ip_address NetworkingPortV2#ip_address}.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#mac_address NetworkingPortV2#mac_address}.

---

### NetworkingPortV2Binding <a name="NetworkingPortV2Binding" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

const networkingPortV2Binding: networkingPortV2.NetworkingPortV2Binding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding.property.hostId">hostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#host_id NetworkingPortV2#host_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding.property.profile">profile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#profile NetworkingPortV2#profile}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding.property.vnicType">vnicType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#vnic_type NetworkingPortV2#vnic_type}. |

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#host_id NetworkingPortV2#host_id}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#profile NetworkingPortV2#profile}.

---

##### `vnicType`<sup>Optional</sup> <a name="vnicType" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding.property.vnicType"></a>

```typescript
public readonly vnicType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#vnic_type NetworkingPortV2#vnic_type}.

---

### NetworkingPortV2Config <a name="NetworkingPortV2Config" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

const networkingPortV2Config: networkingPortV2.NetworkingPortV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#network_id NetworkingPortV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#admin_state_up NetworkingPortV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.allowedAddressPairs">allowedAddressPairs</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>[]</code> | allowed_address_pairs block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.binding">binding</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding">NetworkingPortV2Binding</a></code> | binding block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#description NetworkingPortV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.deviceId">deviceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#device_id NetworkingPortV2#device_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.deviceOwner">deviceOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#device_owner NetworkingPortV2#device_owner}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#dns_name NetworkingPortV2#dns_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.extraDhcpOption">extraDhcpOption</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>[]</code> | extra_dhcp_option block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.fixedIp">fixedIp</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>[]</code> | fixed_ip block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#id NetworkingPortV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.macAddress">macAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#mac_address NetworkingPortV2#mac_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#name NetworkingPortV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.noFixedIp">noFixedIp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#no_fixed_ip NetworkingPortV2#no_fixed_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.noSecurityGroups">noSecurityGroups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#no_security_groups NetworkingPortV2#no_security_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.portSecurityEnabled">portSecurityEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#port_security_enabled NetworkingPortV2#port_security_enabled}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.qosPolicyId">qosPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#qos_policy_id NetworkingPortV2#qos_policy_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#region NetworkingPortV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#security_group_ids NetworkingPortV2#security_group_ids}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#tags NetworkingPortV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#tenant_id NetworkingPortV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts">NetworkingPortV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#value_specs NetworkingPortV2#value_specs}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#network_id NetworkingPortV2#network_id}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#admin_state_up NetworkingPortV2#admin_state_up}.

---

##### `allowedAddressPairs`<sup>Optional</sup> <a name="allowedAddressPairs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.allowedAddressPairs"></a>

```typescript
public readonly allowedAddressPairs: IResolvable | NetworkingPortV2AllowedAddressPairs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>[]

allowed_address_pairs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#allowed_address_pairs NetworkingPortV2#allowed_address_pairs}

---

##### `binding`<sup>Optional</sup> <a name="binding" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.binding"></a>

```typescript
public readonly binding: NetworkingPortV2Binding;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding">NetworkingPortV2Binding</a>

binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#binding NetworkingPortV2#binding}

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#description NetworkingPortV2#description}.

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#device_id NetworkingPortV2#device_id}.

---

##### `deviceOwner`<sup>Optional</sup> <a name="deviceOwner" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.deviceOwner"></a>

```typescript
public readonly deviceOwner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#device_owner NetworkingPortV2#device_owner}.

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#dns_name NetworkingPortV2#dns_name}.

---

##### `extraDhcpOption`<sup>Optional</sup> <a name="extraDhcpOption" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.extraDhcpOption"></a>

```typescript
public readonly extraDhcpOption: IResolvable | NetworkingPortV2ExtraDhcpOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>[]

extra_dhcp_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#extra_dhcp_option NetworkingPortV2#extra_dhcp_option}

---

##### `fixedIp`<sup>Optional</sup> <a name="fixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.fixedIp"></a>

```typescript
public readonly fixedIp: IResolvable | NetworkingPortV2FixedIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>[]

fixed_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#fixed_ip NetworkingPortV2#fixed_ip}

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#id NetworkingPortV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#mac_address NetworkingPortV2#mac_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#name NetworkingPortV2#name}.

---

##### `noFixedIp`<sup>Optional</sup> <a name="noFixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.noFixedIp"></a>

```typescript
public readonly noFixedIp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#no_fixed_ip NetworkingPortV2#no_fixed_ip}.

---

##### `noSecurityGroups`<sup>Optional</sup> <a name="noSecurityGroups" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.noSecurityGroups"></a>

```typescript
public readonly noSecurityGroups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#no_security_groups NetworkingPortV2#no_security_groups}.

---

##### `portSecurityEnabled`<sup>Optional</sup> <a name="portSecurityEnabled" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.portSecurityEnabled"></a>

```typescript
public readonly portSecurityEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#port_security_enabled NetworkingPortV2#port_security_enabled}.

---

##### `qosPolicyId`<sup>Optional</sup> <a name="qosPolicyId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.qosPolicyId"></a>

```typescript
public readonly qosPolicyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#qos_policy_id NetworkingPortV2#qos_policy_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#region NetworkingPortV2#region}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#security_group_ids NetworkingPortV2#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#tags NetworkingPortV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#tenant_id NetworkingPortV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingPortV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts">NetworkingPortV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#timeouts NetworkingPortV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#value_specs NetworkingPortV2#value_specs}.

---

### NetworkingPortV2ExtraDhcpOption <a name="NetworkingPortV2ExtraDhcpOption" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

const networkingPortV2ExtraDhcpOption: networkingPortV2.NetworkingPortV2ExtraDhcpOption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#name NetworkingPortV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#value NetworkingPortV2#value}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption.property.ipVersion">ipVersion</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#ip_version NetworkingPortV2#ip_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#name NetworkingPortV2#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#value NetworkingPortV2#value}.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#ip_version NetworkingPortV2#ip_version}.

---

### NetworkingPortV2FixedIp <a name="NetworkingPortV2FixedIp" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

const networkingPortV2FixedIp: networkingPortV2.NetworkingPortV2FixedIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#subnet_id NetworkingPortV2#subnet_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#ip_address NetworkingPortV2#ip_address}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#subnet_id NetworkingPortV2#subnet_id}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#ip_address NetworkingPortV2#ip_address}.

---

### NetworkingPortV2Timeouts <a name="NetworkingPortV2Timeouts" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

const networkingPortV2Timeouts: networkingPortV2.NetworkingPortV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#create NetworkingPortV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#delete NetworkingPortV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#create NetworkingPortV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_port_v2#delete NetworkingPortV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingPortV2AllowedAddressPairsList <a name="NetworkingPortV2AllowedAddressPairsList" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2AllowedAddressPairsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.get"></a>

```typescript
public get(index: number): NetworkingPortV2AllowedAddressPairsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingPortV2AllowedAddressPairs[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>[]

---


### NetworkingPortV2AllowedAddressPairsOutputReference <a name="NetworkingPortV2AllowedAddressPairsOutputReference" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMacAddress` <a name="resetMacAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.resetMacAddress"></a>

```typescript
public resetMacAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.macAddressInput"></a>

```typescript
public readonly macAddressInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingPortV2AllowedAddressPairs;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2AllowedAddressPairs">NetworkingPortV2AllowedAddressPairs</a>

---


### NetworkingPortV2BindingOutputReference <a name="NetworkingPortV2BindingOutputReference" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2BindingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resetVnicType">resetVnicType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostId` <a name="resetHostId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetProfile` <a name="resetProfile" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetVnicType` <a name="resetVnicType" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.resetVnicType"></a>

```typescript
public resetVnicType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vifDetails">vifDetails</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vifType">vifType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vnicTypeInput">vnicTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vnicType">vnicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding">NetworkingPortV2Binding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vifDetails`<sup>Required</sup> <a name="vifDetails" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vifDetails"></a>

```typescript
public readonly vifDetails: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `vifType`<sup>Required</sup> <a name="vifType" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vifType"></a>

```typescript
public readonly vifType: string;
```

- *Type:* string

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `vnicTypeInput`<sup>Optional</sup> <a name="vnicTypeInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vnicTypeInput"></a>

```typescript
public readonly vnicTypeInput: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `vnicType`<sup>Required</sup> <a name="vnicType" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.vnicType"></a>

```typescript
public readonly vnicType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2BindingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkingPortV2Binding;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Binding">NetworkingPortV2Binding</a>

---


### NetworkingPortV2ExtraDhcpOptionList <a name="NetworkingPortV2ExtraDhcpOptionList" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2ExtraDhcpOptionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.get"></a>

```typescript
public get(index: number): NetworkingPortV2ExtraDhcpOptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingPortV2ExtraDhcpOption[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>[]

---


### NetworkingPortV2ExtraDhcpOptionOutputReference <a name="NetworkingPortV2ExtraDhcpOptionOutputReference" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.resetIpVersion">resetIpVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpVersion` <a name="resetIpVersion" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.resetIpVersion"></a>

```typescript
public resetIpVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.ipVersionInput">ipVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.ipVersion">ipVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.ipVersionInput"></a>

```typescript
public readonly ipVersionInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.ipVersion"></a>

```typescript
public readonly ipVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingPortV2ExtraDhcpOption;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2ExtraDhcpOption">NetworkingPortV2ExtraDhcpOption</a>

---


### NetworkingPortV2FixedIpList <a name="NetworkingPortV2FixedIpList" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2FixedIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.get"></a>

```typescript
public get(index: number): NetworkingPortV2FixedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingPortV2FixedIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>[]

---


### NetworkingPortV2FixedIpOutputReference <a name="NetworkingPortV2FixedIpOutputReference" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2FixedIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingPortV2FixedIp;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2FixedIp">NetworkingPortV2FixedIp</a>

---


### NetworkingPortV2TimeoutsOutputReference <a name="NetworkingPortV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { networkingPortV2 } from '@ithings/cdktf-provider-openstack'

new networkingPortV2.NetworkingPortV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts">NetworkingPortV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingPortV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingPortV2.NetworkingPortV2Timeouts">NetworkingPortV2Timeouts</a>

---




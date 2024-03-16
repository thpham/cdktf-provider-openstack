# `networkingRouterV2` Submodule <a name="`networkingRouterV2` Submodule" id="@ithings/cdktf-provider-openstack.networkingRouterV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingRouterV2 <a name="NetworkingRouterV2" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2 openstack_networking_router_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

new networkingRouterV2.NetworkingRouterV2(scope: Construct, id: string, config?: NetworkingRouterV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config">NetworkingRouterV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config">NetworkingRouterV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putExternalFixedIp">putExternalFixedIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putVendorOptions">putVendorOptions</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAvailabilityZoneHints">resetAvailabilityZoneHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDistributed">resetDistributed</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetEnableSnat">resetEnableSnat</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalFixedIp">resetExternalFixedIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalGateway">resetExternalGateway</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalNetworkId">resetExternalNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalSubnetIds">resetExternalSubnetIds</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetValueSpecs">resetValueSpecs</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetVendorOptions">resetVendorOptions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExternalFixedIp` <a name="putExternalFixedIp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putExternalFixedIp"></a>

```typescript
public putExternalFixedIp(value: IResolvable | NetworkingRouterV2ExternalFixedIp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putExternalFixedIp.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkingRouterV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>

---

##### `putVendorOptions` <a name="putVendorOptions" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putVendorOptions"></a>

```typescript
public putVendorOptions(value: NetworkingRouterV2VendorOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.putVendorOptions.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetAvailabilityZoneHints` <a name="resetAvailabilityZoneHints" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetAvailabilityZoneHints"></a>

```typescript
public resetAvailabilityZoneHints(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDistributed` <a name="resetDistributed" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetDistributed"></a>

```typescript
public resetDistributed(): void
```

##### `resetEnableSnat` <a name="resetEnableSnat" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetEnableSnat"></a>

```typescript
public resetEnableSnat(): void
```

##### `resetExternalFixedIp` <a name="resetExternalFixedIp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalFixedIp"></a>

```typescript
public resetExternalFixedIp(): void
```

##### `resetExternalGateway` <a name="resetExternalGateway" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalGateway"></a>

```typescript
public resetExternalGateway(): void
```

##### `resetExternalNetworkId` <a name="resetExternalNetworkId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalNetworkId"></a>

```typescript
public resetExternalNetworkId(): void
```

##### `resetExternalSubnetIds` <a name="resetExternalSubnetIds" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetExternalSubnetIds"></a>

```typescript
public resetExternalSubnetIds(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSpecs` <a name="resetValueSpecs" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetValueSpecs"></a>

```typescript
public resetValueSpecs(): void
```

##### `resetVendorOptions` <a name="resetVendorOptions" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.resetVendorOptions"></a>

```typescript
public resetVendorOptions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkingRouterV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isConstruct"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

networkingRouterV2.NetworkingRouterV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformElement"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

networkingRouterV2.NetworkingRouterV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformResource"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

networkingRouterV2.NetworkingRouterV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

networkingRouterV2.NetworkingRouterV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkingRouterV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkingRouterV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkingRouterV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkingRouterV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIp">externalFixedIp</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList">NetworkingRouterV2ExternalFixedIpList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference">NetworkingRouterV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptions">vendorOptions</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference">NetworkingRouterV2VendorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHintsInput">availabilityZoneHintsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributedInput">distributedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnatInput">enableSnatInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIpInput">externalFixedIpInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGatewayInput">externalGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkIdInput">externalNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIdsInput">externalSubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecsInput">valueSpecsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptionsInput">vendorOptionsInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHints">availabilityZoneHints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributed">distributed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnat">enableSnat</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGateway">externalGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkId">externalNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIds">externalSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `externalFixedIp`<sup>Required</sup> <a name="externalFixedIp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIp"></a>

```typescript
public readonly externalFixedIp: NetworkingRouterV2ExternalFixedIpList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList">NetworkingRouterV2ExternalFixedIpList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingRouterV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference">NetworkingRouterV2TimeoutsOutputReference</a>

---

##### `vendorOptions`<sup>Required</sup> <a name="vendorOptions" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptions"></a>

```typescript
public readonly vendorOptions: NetworkingRouterV2VendorOptionsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference">NetworkingRouterV2VendorOptionsOutputReference</a>

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneHintsInput`<sup>Optional</sup> <a name="availabilityZoneHintsInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHintsInput"></a>

```typescript
public readonly availabilityZoneHintsInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `distributedInput`<sup>Optional</sup> <a name="distributedInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributedInput"></a>

```typescript
public readonly distributedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSnatInput`<sup>Optional</sup> <a name="enableSnatInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnatInput"></a>

```typescript
public readonly enableSnatInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalFixedIpInput`<sup>Optional</sup> <a name="externalFixedIpInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalFixedIpInput"></a>

```typescript
public readonly externalFixedIpInput: IResolvable | NetworkingRouterV2ExternalFixedIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>[]

---

##### `externalGatewayInput`<sup>Optional</sup> <a name="externalGatewayInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGatewayInput"></a>

```typescript
public readonly externalGatewayInput: string;
```

- *Type:* string

---

##### `externalNetworkIdInput`<sup>Optional</sup> <a name="externalNetworkIdInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkIdInput"></a>

```typescript
public readonly externalNetworkIdInput: string;
```

- *Type:* string

---

##### `externalSubnetIdsInput`<sup>Optional</sup> <a name="externalSubnetIdsInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIdsInput"></a>

```typescript
public readonly externalSubnetIdsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkingRouterV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>

---

##### `valueSpecsInput`<sup>Optional</sup> <a name="valueSpecsInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecsInput"></a>

```typescript
public readonly valueSpecsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vendorOptionsInput`<sup>Optional</sup> <a name="vendorOptionsInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.vendorOptionsInput"></a>

```typescript
public readonly vendorOptionsInput: NetworkingRouterV2VendorOptions;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneHints`<sup>Required</sup> <a name="availabilityZoneHints" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.availabilityZoneHints"></a>

```typescript
public readonly availabilityZoneHints: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributed`<sup>Required</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.distributed"></a>

```typescript
public readonly distributed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSnat`<sup>Required</sup> <a name="enableSnat" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.enableSnat"></a>

```typescript
public readonly enableSnat: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalGateway`<sup>Required</sup> <a name="externalGateway" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalGateway"></a>

```typescript
public readonly externalGateway: string;
```

- *Type:* string

---

##### `externalNetworkId`<sup>Required</sup> <a name="externalNetworkId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalNetworkId"></a>

```typescript
public readonly externalNetworkId: string;
```

- *Type:* string

---

##### `externalSubnetIds`<sup>Required</sup> <a name="externalSubnetIds" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.externalSubnetIds"></a>

```typescript
public readonly externalSubnetIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `valueSpecs`<sup>Required</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingRouterV2Config <a name="NetworkingRouterV2Config" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

const networkingRouterV2Config: networkingRouterV2.NetworkingRouterV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#admin_state_up NetworkingRouterV2#admin_state_up}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.availabilityZoneHints">availabilityZoneHints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#availability_zone_hints NetworkingRouterV2#availability_zone_hints}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#description NetworkingRouterV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.distributed">distributed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#distributed NetworkingRouterV2#distributed}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.enableSnat">enableSnat</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#enable_snat NetworkingRouterV2#enable_snat}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalFixedIp">externalFixedIp</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>[]</code> | external_fixed_ip block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalGateway">externalGateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_gateway NetworkingRouterV2#external_gateway}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalNetworkId">externalNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_network_id NetworkingRouterV2#external_network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalSubnetIds">externalSubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_subnet_ids NetworkingRouterV2#external_subnet_ids}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#id NetworkingRouterV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#name NetworkingRouterV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#region NetworkingRouterV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tags NetworkingRouterV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tenant_id NetworkingRouterV2#tenant_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.valueSpecs">valueSpecs</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#value_specs NetworkingRouterV2#value_specs}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.vendorOptions">vendorOptions</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a></code> | vendor_options block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#admin_state_up NetworkingRouterV2#admin_state_up}.

---

##### `availabilityZoneHints`<sup>Optional</sup> <a name="availabilityZoneHints" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.availabilityZoneHints"></a>

```typescript
public readonly availabilityZoneHints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#availability_zone_hints NetworkingRouterV2#availability_zone_hints}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#description NetworkingRouterV2#description}.

---

##### `distributed`<sup>Optional</sup> <a name="distributed" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.distributed"></a>

```typescript
public readonly distributed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#distributed NetworkingRouterV2#distributed}.

---

##### `enableSnat`<sup>Optional</sup> <a name="enableSnat" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.enableSnat"></a>

```typescript
public readonly enableSnat: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#enable_snat NetworkingRouterV2#enable_snat}.

---

##### `externalFixedIp`<sup>Optional</sup> <a name="externalFixedIp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalFixedIp"></a>

```typescript
public readonly externalFixedIp: IResolvable | NetworkingRouterV2ExternalFixedIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>[]

external_fixed_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_fixed_ip NetworkingRouterV2#external_fixed_ip}

---

##### `externalGateway`<sup>Optional</sup> <a name="externalGateway" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalGateway"></a>

```typescript
public readonly externalGateway: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_gateway NetworkingRouterV2#external_gateway}.

---

##### `externalNetworkId`<sup>Optional</sup> <a name="externalNetworkId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalNetworkId"></a>

```typescript
public readonly externalNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_network_id NetworkingRouterV2#external_network_id}.

---

##### `externalSubnetIds`<sup>Optional</sup> <a name="externalSubnetIds" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.externalSubnetIds"></a>

```typescript
public readonly externalSubnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#external_subnet_ids NetworkingRouterV2#external_subnet_ids}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#id NetworkingRouterV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#name NetworkingRouterV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#region NetworkingRouterV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tags NetworkingRouterV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#tenant_id NetworkingRouterV2#tenant_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkingRouterV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#timeouts NetworkingRouterV2#timeouts}

---

##### `valueSpecs`<sup>Optional</sup> <a name="valueSpecs" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.valueSpecs"></a>

```typescript
public readonly valueSpecs: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#value_specs NetworkingRouterV2#value_specs}.

---

##### `vendorOptions`<sup>Optional</sup> <a name="vendorOptions" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Config.property.vendorOptions"></a>

```typescript
public readonly vendorOptions: NetworkingRouterV2VendorOptions;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

vendor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#vendor_options NetworkingRouterV2#vendor_options}

---

### NetworkingRouterV2ExternalFixedIp <a name="NetworkingRouterV2ExternalFixedIp" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

const networkingRouterV2ExternalFixedIp: networkingRouterV2.NetworkingRouterV2ExternalFixedIp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#ip_address NetworkingRouterV2#ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#subnet_id NetworkingRouterV2#subnet_id}. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#ip_address NetworkingRouterV2#ip_address}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#subnet_id NetworkingRouterV2#subnet_id}.

---

### NetworkingRouterV2Timeouts <a name="NetworkingRouterV2Timeouts" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

const networkingRouterV2Timeouts: networkingRouterV2.NetworkingRouterV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#create NetworkingRouterV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#delete NetworkingRouterV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#create NetworkingRouterV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#delete NetworkingRouterV2#delete}.

---

### NetworkingRouterV2VendorOptions <a name="NetworkingRouterV2VendorOptions" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

const networkingRouterV2VendorOptions: networkingRouterV2.NetworkingRouterV2VendorOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions.property.setRouterGatewayAfterCreate">setRouterGatewayAfterCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#set_router_gateway_after_create NetworkingRouterV2#set_router_gateway_after_create}. |

---

##### `setRouterGatewayAfterCreate`<sup>Optional</sup> <a name="setRouterGatewayAfterCreate" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions.property.setRouterGatewayAfterCreate"></a>

```typescript
public readonly setRouterGatewayAfterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/networking_router_v2#set_router_gateway_after_create NetworkingRouterV2#set_router_gateway_after_create}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkingRouterV2ExternalFixedIpList <a name="NetworkingRouterV2ExternalFixedIpList" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

new networkingRouterV2.NetworkingRouterV2ExternalFixedIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.get"></a>

```typescript
public get(index: number): NetworkingRouterV2ExternalFixedIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingRouterV2ExternalFixedIp[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>[]

---


### NetworkingRouterV2ExternalFixedIpOutputReference <a name="NetworkingRouterV2ExternalFixedIpOutputReference" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

new networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingRouterV2ExternalFixedIp;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2ExternalFixedIp">NetworkingRouterV2ExternalFixedIp</a>

---


### NetworkingRouterV2TimeoutsOutputReference <a name="NetworkingRouterV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

new networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkingRouterV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2Timeouts">NetworkingRouterV2Timeouts</a>

---


### NetworkingRouterV2VendorOptionsOutputReference <a name="NetworkingRouterV2VendorOptionsOutputReference" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer"></a>

```typescript
import { networkingRouterV2 } from '@ithings/cdktf-provider-openstack'

new networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resetSetRouterGatewayAfterCreate">resetSetRouterGatewayAfterCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSetRouterGatewayAfterCreate` <a name="resetSetRouterGatewayAfterCreate" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.resetSetRouterGatewayAfterCreate"></a>

```typescript
public resetSetRouterGatewayAfterCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreateInput">setRouterGatewayAfterCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreate">setRouterGatewayAfterCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `setRouterGatewayAfterCreateInput`<sup>Optional</sup> <a name="setRouterGatewayAfterCreateInput" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreateInput"></a>

```typescript
public readonly setRouterGatewayAfterCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `setRouterGatewayAfterCreate`<sup>Required</sup> <a name="setRouterGatewayAfterCreate" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.setRouterGatewayAfterCreate"></a>

```typescript
public readonly setRouterGatewayAfterCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NetworkingRouterV2VendorOptions;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.networkingRouterV2.NetworkingRouterV2VendorOptions">NetworkingRouterV2VendorOptions</a>

---




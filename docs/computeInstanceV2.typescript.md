# `computeInstanceV2` Submodule <a name="`computeInstanceV2` Submodule" id="@ithings/cdktf-provider-openstack.computeInstanceV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstanceV2 <a name="ComputeInstanceV2" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2 openstack_compute_instance_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2(scope: Construct, id: string, config: ComputeInstanceV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config">ComputeInstanceV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config">ComputeInstanceV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putBlockDevice">putBlockDevice</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putPersonality">putPersonality</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putSchedulerHints">putSchedulerHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVendorOptions">putVendorOptions</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV4">resetAccessIpV4</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV6">resetAccessIpV6</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAdminPass">resetAdminPass</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZoneHints">resetAvailabilityZoneHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetBlockDevice">resetBlockDevice</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetConfigDrive">resetConfigDrive</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorId">resetFlavorId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorName">resetFlavorName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFloatingIp">resetFloatingIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetForceDelete">resetForceDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetKeyPair">resetKeyPair</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetworkMode">resetNetworkMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPersonality">resetPersonality</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPowerState">resetPowerState</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSchedulerHints">resetSchedulerHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetStopBeforeDestroy">resetStopBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetUserData">resetUserData</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVendorOptions">resetVendorOptions</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVolume">resetVolume</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBlockDevice` <a name="putBlockDevice" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putBlockDevice"></a>

```typescript
public putBlockDevice(value: IResolvable | ComputeInstanceV2BlockDevice[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putBlockDevice.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>[]

---

##### `putNetwork` <a name="putNetwork" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putNetwork"></a>

```typescript
public putNetwork(value: IResolvable | ComputeInstanceV2Network[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putNetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>[]

---

##### `putPersonality` <a name="putPersonality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putPersonality"></a>

```typescript
public putPersonality(value: IResolvable | ComputeInstanceV2Personality[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putPersonality.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>[]

---

##### `putSchedulerHints` <a name="putSchedulerHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putSchedulerHints"></a>

```typescript
public putSchedulerHints(value: IResolvable | ComputeInstanceV2SchedulerHints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putSchedulerHints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeInstanceV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

---

##### `putVendorOptions` <a name="putVendorOptions" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVendorOptions"></a>

```typescript
public putVendorOptions(value: ComputeInstanceV2VendorOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVendorOptions.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

---

##### `putVolume` <a name="putVolume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVolume"></a>

```typescript
public putVolume(value: IResolvable | ComputeInstanceV2Volume[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.putVolume.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>[]

---

##### `resetAccessIpV4` <a name="resetAccessIpV4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV4"></a>

```typescript
public resetAccessIpV4(): void
```

##### `resetAccessIpV6` <a name="resetAccessIpV6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAccessIpV6"></a>

```typescript
public resetAccessIpV6(): void
```

##### `resetAdminPass` <a name="resetAdminPass" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAdminPass"></a>

```typescript
public resetAdminPass(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetAvailabilityZoneHints` <a name="resetAvailabilityZoneHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetAvailabilityZoneHints"></a>

```typescript
public resetAvailabilityZoneHints(): void
```

##### `resetBlockDevice` <a name="resetBlockDevice" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetBlockDevice"></a>

```typescript
public resetBlockDevice(): void
```

##### `resetConfigDrive` <a name="resetConfigDrive" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetConfigDrive"></a>

```typescript
public resetConfigDrive(): void
```

##### `resetFlavorId` <a name="resetFlavorId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorId"></a>

```typescript
public resetFlavorId(): void
```

##### `resetFlavorName` <a name="resetFlavorName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFlavorName"></a>

```typescript
public resetFlavorName(): void
```

##### `resetFloatingIp` <a name="resetFloatingIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetFloatingIp"></a>

```typescript
public resetFloatingIp(): void
```

##### `resetForceDelete` <a name="resetForceDelete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetForceDelete"></a>

```typescript
public resetForceDelete(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetImageName` <a name="resetImageName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetKeyPair` <a name="resetKeyPair" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetKeyPair"></a>

```typescript
public resetKeyPair(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkMode` <a name="resetNetworkMode" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetNetworkMode"></a>

```typescript
public resetNetworkMode(): void
```

##### `resetPersonality` <a name="resetPersonality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPersonality"></a>

```typescript
public resetPersonality(): void
```

##### `resetPowerState` <a name="resetPowerState" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetPowerState"></a>

```typescript
public resetPowerState(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSchedulerHints` <a name="resetSchedulerHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSchedulerHints"></a>

```typescript
public resetSchedulerHints(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetStopBeforeDestroy` <a name="resetStopBeforeDestroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetStopBeforeDestroy"></a>

```typescript
public resetStopBeforeDestroy(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUserData` <a name="resetUserData" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetUserData"></a>

```typescript
public resetUserData(): void
```

##### `resetVendorOptions` <a name="resetVendorOptions" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVendorOptions"></a>

```typescript
public resetVendorOptions(): void
```

##### `resetVolume` <a name="resetVolume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.resetVolume"></a>

```typescript
public resetVolume(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstanceV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isConstruct"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

computeInstanceV2.ComputeInstanceV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformElement"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

computeInstanceV2.ComputeInstanceV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformResource"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

computeInstanceV2.ComputeInstanceV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

computeInstanceV2.ComputeInstanceV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeInstanceV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInstanceV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInstanceV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstanceV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allMetadata">allMetadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDevice">blockDevice</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList">ComputeInstanceV2BlockDeviceList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.network">network</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList">ComputeInstanceV2NetworkList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personality">personality</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList">ComputeInstanceV2PersonalityList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHints">schedulerHints</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList">ComputeInstanceV2SchedulerHintsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference">ComputeInstanceV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.updated">updated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptions">vendorOptions</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference">ComputeInstanceV2VendorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volume">volume</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList">ComputeInstanceV2VolumeList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4Input">accessIpV4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6Input">accessIpV6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPassInput">adminPassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHintsInput">availabilityZoneHintsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDeviceInput">blockDeviceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDriveInput">configDriveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorIdInput">flavorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorNameInput">flavorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIpInput">floatingIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDeleteInput">forceDeleteInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPairInput">keyPairInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkInput">networkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkModeInput">networkModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personalityInput">personalityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerStateInput">powerStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHintsInput">schedulerHintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroyInput">stopBeforeDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptionsInput">vendorOptionsInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volumeInput">volumeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4">accessIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6">accessIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPass">adminPass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHints">availabilityZoneHints</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDrive">configDrive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorId">flavorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorName">flavorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIp">floatingIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPair">keyPair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkMode">networkMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerState">powerState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroy">stopBeforeDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userData">userData</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allMetadata`<sup>Required</sup> <a name="allMetadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allMetadata"></a>

```typescript
public readonly allMetadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `blockDevice`<sup>Required</sup> <a name="blockDevice" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDevice"></a>

```typescript
public readonly blockDevice: ComputeInstanceV2BlockDeviceList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList">ComputeInstanceV2BlockDeviceList</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.network"></a>

```typescript
public readonly network: ComputeInstanceV2NetworkList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList">ComputeInstanceV2NetworkList</a>

---

##### `personality`<sup>Required</sup> <a name="personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personality"></a>

```typescript
public readonly personality: ComputeInstanceV2PersonalityList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList">ComputeInstanceV2PersonalityList</a>

---

##### `schedulerHints`<sup>Required</sup> <a name="schedulerHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHints"></a>

```typescript
public readonly schedulerHints: ComputeInstanceV2SchedulerHintsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList">ComputeInstanceV2SchedulerHintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference">ComputeInstanceV2TimeoutsOutputReference</a>

---

##### `updated`<sup>Required</sup> <a name="updated" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.updated"></a>

```typescript
public readonly updated: string;
```

- *Type:* string

---

##### `vendorOptions`<sup>Required</sup> <a name="vendorOptions" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptions"></a>

```typescript
public readonly vendorOptions: ComputeInstanceV2VendorOptionsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference">ComputeInstanceV2VendorOptionsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volume"></a>

```typescript
public readonly volume: ComputeInstanceV2VolumeList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList">ComputeInstanceV2VolumeList</a>

---

##### `accessIpV4Input`<sup>Optional</sup> <a name="accessIpV4Input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4Input"></a>

```typescript
public readonly accessIpV4Input: string;
```

- *Type:* string

---

##### `accessIpV6Input`<sup>Optional</sup> <a name="accessIpV6Input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6Input"></a>

```typescript
public readonly accessIpV6Input: string;
```

- *Type:* string

---

##### `adminPassInput`<sup>Optional</sup> <a name="adminPassInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPassInput"></a>

```typescript
public readonly adminPassInput: string;
```

- *Type:* string

---

##### `availabilityZoneHintsInput`<sup>Optional</sup> <a name="availabilityZoneHintsInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHintsInput"></a>

```typescript
public readonly availabilityZoneHintsInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `blockDeviceInput`<sup>Optional</sup> <a name="blockDeviceInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.blockDeviceInput"></a>

```typescript
public readonly blockDeviceInput: IResolvable | ComputeInstanceV2BlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>[]

---

##### `configDriveInput`<sup>Optional</sup> <a name="configDriveInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDriveInput"></a>

```typescript
public readonly configDriveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flavorIdInput`<sup>Optional</sup> <a name="flavorIdInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorIdInput"></a>

```typescript
public readonly flavorIdInput: string;
```

- *Type:* string

---

##### `flavorNameInput`<sup>Optional</sup> <a name="flavorNameInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorNameInput"></a>

```typescript
public readonly flavorNameInput: string;
```

- *Type:* string

---

##### `floatingIpInput`<sup>Optional</sup> <a name="floatingIpInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIpInput"></a>

```typescript
public readonly floatingIpInput: string;
```

- *Type:* string

---

##### `forceDeleteInput`<sup>Optional</sup> <a name="forceDeleteInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDeleteInput"></a>

```typescript
public readonly forceDeleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `keyPairInput`<sup>Optional</sup> <a name="keyPairInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPairInput"></a>

```typescript
public readonly keyPairInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkInput"></a>

```typescript
public readonly networkInput: IResolvable | ComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>[]

---

##### `networkModeInput`<sup>Optional</sup> <a name="networkModeInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkModeInput"></a>

```typescript
public readonly networkModeInput: string;
```

- *Type:* string

---

##### `personalityInput`<sup>Optional</sup> <a name="personalityInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.personalityInput"></a>

```typescript
public readonly personalityInput: IResolvable | ComputeInstanceV2Personality[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>[]

---

##### `powerStateInput`<sup>Optional</sup> <a name="powerStateInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerStateInput"></a>

```typescript
public readonly powerStateInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `schedulerHintsInput`<sup>Optional</sup> <a name="schedulerHintsInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.schedulerHintsInput"></a>

```typescript
public readonly schedulerHintsInput: IResolvable | ComputeInstanceV2SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>[]

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `stopBeforeDestroyInput`<sup>Optional</sup> <a name="stopBeforeDestroyInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroyInput"></a>

```typescript
public readonly stopBeforeDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeInstanceV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `vendorOptionsInput`<sup>Optional</sup> <a name="vendorOptionsInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.vendorOptionsInput"></a>

```typescript
public readonly vendorOptionsInput: ComputeInstanceV2VendorOptions;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.volumeInput"></a>

```typescript
public readonly volumeInput: IResolvable | ComputeInstanceV2Volume[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>[]

---

##### `accessIpV4`<sup>Required</sup> <a name="accessIpV4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV4"></a>

```typescript
public readonly accessIpV4: string;
```

- *Type:* string

---

##### `accessIpV6`<sup>Required</sup> <a name="accessIpV6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.accessIpV6"></a>

```typescript
public readonly accessIpV6: string;
```

- *Type:* string

---

##### `adminPass`<sup>Required</sup> <a name="adminPass" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.adminPass"></a>

```typescript
public readonly adminPass: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneHints`<sup>Required</sup> <a name="availabilityZoneHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.availabilityZoneHints"></a>

```typescript
public readonly availabilityZoneHints: string;
```

- *Type:* string

---

##### `configDrive`<sup>Required</sup> <a name="configDrive" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.configDrive"></a>

```typescript
public readonly configDrive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flavorId`<sup>Required</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

---

##### `flavorName`<sup>Required</sup> <a name="flavorName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.flavorName"></a>

```typescript
public readonly flavorName: string;
```

- *Type:* string

---

##### `floatingIp`<sup>Required</sup> <a name="floatingIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.floatingIp"></a>

```typescript
public readonly floatingIp: string;
```

- *Type:* string

---

##### `forceDelete`<sup>Required</sup> <a name="forceDelete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `keyPair`<sup>Required</sup> <a name="keyPair" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkMode`<sup>Required</sup> <a name="networkMode" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

---

##### `powerState`<sup>Required</sup> <a name="powerState" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `stopBeforeDestroy`<sup>Required</sup> <a name="stopBeforeDestroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.stopBeforeDestroy"></a>

```typescript
public readonly stopBeforeDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `userData`<sup>Required</sup> <a name="userData" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceV2BlockDevice <a name="ComputeInstanceV2BlockDevice" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2BlockDevice: computeInstanceV2.ComputeInstanceV2BlockDevice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#source_type ComputeInstanceV2#source_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.bootIndex">bootIndex</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deviceType">deviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device_type ComputeInstanceV2#device_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.diskBus">diskBus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#disk_bus ComputeInstanceV2#disk_bus}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.guestFormat">guestFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.multiattach">multiattach</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#multiattach ComputeInstanceV2#multiattach}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.uuid">uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}. |

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#source_type ComputeInstanceV2#source_type}.

---

##### `bootIndex`<sup>Optional</sup> <a name="bootIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.bootIndex"></a>

```typescript
public readonly bootIndex: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}.

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}.

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}.

---

##### `deviceType`<sup>Optional</sup> <a name="deviceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device_type ComputeInstanceV2#device_type}.

---

##### `diskBus`<sup>Optional</sup> <a name="diskBus" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.diskBus"></a>

```typescript
public readonly diskBus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#disk_bus ComputeInstanceV2#disk_bus}.

---

##### `guestFormat`<sup>Optional</sup> <a name="guestFormat" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.guestFormat"></a>

```typescript
public readonly guestFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}.

---

##### `multiattach`<sup>Optional</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.multiattach"></a>

```typescript
public readonly multiattach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#multiattach ComputeInstanceV2#multiattach}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}.

---

### ComputeInstanceV2Config <a name="ComputeInstanceV2Config" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2Config: computeInstanceV2.ComputeInstanceV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV4">accessIpV4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV6">accessIpV6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.adminPass">adminPass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZoneHints">availabilityZoneHints</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone_hints ComputeInstanceV2#availability_zone_hints}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.blockDevice">blockDevice</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>[]</code> | block_device block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.configDrive">configDrive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorId">flavorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorName">flavorName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.floatingIp">floatingIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forceDelete">forceDelete</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#force_delete ComputeInstanceV2#force_delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_id ComputeInstanceV2#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_name ComputeInstanceV2#image_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.keyPair">keyPair</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#metadata ComputeInstanceV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.network">network</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>[]</code> | network block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.networkMode">networkMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network_mode ComputeInstanceV2#network_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.personality">personality</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>[]</code> | personality block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.powerState">powerState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#power_state ComputeInstanceV2#power_state}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#region ComputeInstanceV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.schedulerHints">schedulerHints</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>[]</code> | scheduler_hints block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.stopBeforeDestroy">stopBeforeDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#tags ComputeInstanceV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.userData">userData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#user_data ComputeInstanceV2#user_data}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.vendorOptions">vendorOptions</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a></code> | vendor_options block. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.volume">volume</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>[]</code> | volume block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}.

---

##### `accessIpV4`<sup>Optional</sup> <a name="accessIpV4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV4"></a>

```typescript
public readonly accessIpV4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}.

---

##### `accessIpV6`<sup>Optional</sup> <a name="accessIpV6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.accessIpV6"></a>

```typescript
public readonly accessIpV6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}.

---

##### `adminPass`<sup>Optional</sup> <a name="adminPass" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.adminPass"></a>

```typescript
public readonly adminPass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}.

---

##### `availabilityZoneHints`<sup>Optional</sup> <a name="availabilityZoneHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.availabilityZoneHints"></a>

```typescript
public readonly availabilityZoneHints: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#availability_zone_hints ComputeInstanceV2#availability_zone_hints}.

---

##### `blockDevice`<sup>Optional</sup> <a name="blockDevice" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.blockDevice"></a>

```typescript
public readonly blockDevice: IResolvable | ComputeInstanceV2BlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>[]

block_device block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#block_device ComputeInstanceV2#block_device}

---

##### `configDrive`<sup>Optional</sup> <a name="configDrive" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.configDrive"></a>

```typescript
public readonly configDrive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}.

---

##### `flavorId`<sup>Optional</sup> <a name="flavorId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorId"></a>

```typescript
public readonly flavorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}.

---

##### `flavorName`<sup>Optional</sup> <a name="flavorName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.flavorName"></a>

```typescript
public readonly flavorName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}.

---

##### `floatingIp`<sup>Optional</sup> <a name="floatingIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.floatingIp"></a>

```typescript
public readonly floatingIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}.

---

##### `forceDelete`<sup>Optional</sup> <a name="forceDelete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.forceDelete"></a>

```typescript
public readonly forceDelete: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#force_delete ComputeInstanceV2#force_delete}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_id ComputeInstanceV2#image_id}.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#image_name ComputeInstanceV2#image_name}.

---

##### `keyPair`<sup>Optional</sup> <a name="keyPair" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.keyPair"></a>

```typescript
public readonly keyPair: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#metadata ComputeInstanceV2#metadata}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.network"></a>

```typescript
public readonly network: IResolvable | ComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>[]

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network ComputeInstanceV2#network}

---

##### `networkMode`<sup>Optional</sup> <a name="networkMode" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.networkMode"></a>

```typescript
public readonly networkMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#network_mode ComputeInstanceV2#network_mode}.

---

##### `personality`<sup>Optional</sup> <a name="personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.personality"></a>

```typescript
public readonly personality: IResolvable | ComputeInstanceV2Personality[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>[]

personality block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#personality ComputeInstanceV2#personality}

---

##### `powerState`<sup>Optional</sup> <a name="powerState" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.powerState"></a>

```typescript
public readonly powerState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#power_state ComputeInstanceV2#power_state}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#region ComputeInstanceV2#region}.

---

##### `schedulerHints`<sup>Optional</sup> <a name="schedulerHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.schedulerHints"></a>

```typescript
public readonly schedulerHints: IResolvable | ComputeInstanceV2SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>[]

scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#scheduler_hints ComputeInstanceV2#scheduler_hints}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}.

---

##### `stopBeforeDestroy`<sup>Optional</sup> <a name="stopBeforeDestroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.stopBeforeDestroy"></a>

```typescript
public readonly stopBeforeDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#tags ComputeInstanceV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#timeouts ComputeInstanceV2#timeouts}

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#user_data ComputeInstanceV2#user_data}.

---

##### `vendorOptions`<sup>Optional</sup> <a name="vendorOptions" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.vendorOptions"></a>

```typescript
public readonly vendorOptions: ComputeInstanceV2VendorOptions;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

vendor_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#vendor_options ComputeInstanceV2#vendor_options}

---

##### `volume`<sup>Optional</sup> <a name="volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Config.property.volume"></a>

```typescript
public readonly volume: IResolvable | ComputeInstanceV2Volume[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>[]

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume ComputeInstanceV2#volume}

---

### ComputeInstanceV2Network <a name="ComputeInstanceV2Network" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2Network: computeInstanceV2.ComputeInstanceV2Network = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.accessNetwork">accessNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_network ComputeInstanceV2#access_network}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV4">fixedIpV4</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV6">fixedIpV6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.floatingIp">floatingIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.port">port</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#port ComputeInstanceV2#port}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.uuid">uuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}. |

---

##### `accessNetwork`<sup>Optional</sup> <a name="accessNetwork" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.accessNetwork"></a>

```typescript
public readonly accessNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#access_network ComputeInstanceV2#access_network}.

---

##### `fixedIpV4`<sup>Optional</sup> <a name="fixedIpV4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV4"></a>

```typescript
public readonly fixedIpV4: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}.

---

##### `fixedIpV6`<sup>Optional</sup> <a name="fixedIpV6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.fixedIpV6"></a>

```typescript
public readonly fixedIpV6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}.

---

##### `floatingIp`<sup>Optional</sup> <a name="floatingIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.floatingIp"></a>

```typescript
public readonly floatingIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#port ComputeInstanceV2#port}.

---

##### `uuid`<sup>Optional</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}.

---

### ComputeInstanceV2Personality <a name="ComputeInstanceV2Personality" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2Personality: computeInstanceV2.ComputeInstanceV2Personality = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#content ComputeInstanceV2#content}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.file">file</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#file ComputeInstanceV2#file}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#content ComputeInstanceV2#content}.

---

##### `file`<sup>Required</sup> <a name="file" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#file ComputeInstanceV2#file}.

---

### ComputeInstanceV2SchedulerHints <a name="ComputeInstanceV2SchedulerHints" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2SchedulerHints: computeInstanceV2.ComputeInstanceV2SchedulerHints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#additional_properties ComputeInstanceV2#additional_properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.buildNearHostIp">buildNearHostIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentCell">differentCell</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_cell ComputeInstanceV2#different_cell}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentHost">differentHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_host ComputeInstanceV2#different_host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.group">group</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#group ComputeInstanceV2#group}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.query">query</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#query ComputeInstanceV2#query}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.sameHost">sameHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#same_host ComputeInstanceV2#same_host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.targetCell">targetCell</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}. |

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#additional_properties ComputeInstanceV2#additional_properties}.

---

##### `buildNearHostIp`<sup>Optional</sup> <a name="buildNearHostIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.buildNearHostIp"></a>

```typescript
public readonly buildNearHostIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}.

---

##### `differentCell`<sup>Optional</sup> <a name="differentCell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentCell"></a>

```typescript
public readonly differentCell: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_cell ComputeInstanceV2#different_cell}.

---

##### `differentHost`<sup>Optional</sup> <a name="differentHost" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.differentHost"></a>

```typescript
public readonly differentHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#different_host ComputeInstanceV2#different_host}.

---

##### `group`<sup>Optional</sup> <a name="group" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#group ComputeInstanceV2#group}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.query"></a>

```typescript
public readonly query: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#query ComputeInstanceV2#query}.

---

##### `sameHost`<sup>Optional</sup> <a name="sameHost" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.sameHost"></a>

```typescript
public readonly sameHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#same_host ComputeInstanceV2#same_host}.

---

##### `targetCell`<sup>Optional</sup> <a name="targetCell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints.property.targetCell"></a>

```typescript
public readonly targetCell: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}.

---

### ComputeInstanceV2Timeouts <a name="ComputeInstanceV2Timeouts" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2Timeouts: computeInstanceV2.ComputeInstanceV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#create ComputeInstanceV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete ComputeInstanceV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#update ComputeInstanceV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#create ComputeInstanceV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#delete ComputeInstanceV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#update ComputeInstanceV2#update}.

---

### ComputeInstanceV2VendorOptions <a name="ComputeInstanceV2VendorOptions" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2VendorOptions: computeInstanceV2.ComputeInstanceV2VendorOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.detachPortsBeforeDestroy">detachPortsBeforeDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#detach_ports_before_destroy ComputeInstanceV2#detach_ports_before_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.ignoreResizeConfirmation">ignoreResizeConfirmation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#ignore_resize_confirmation ComputeInstanceV2#ignore_resize_confirmation}. |

---

##### `detachPortsBeforeDestroy`<sup>Optional</sup> <a name="detachPortsBeforeDestroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.detachPortsBeforeDestroy"></a>

```typescript
public readonly detachPortsBeforeDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#detach_ports_before_destroy ComputeInstanceV2#detach_ports_before_destroy}.

---

##### `ignoreResizeConfirmation`<sup>Optional</sup> <a name="ignoreResizeConfirmation" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions.property.ignoreResizeConfirmation"></a>

```typescript
public readonly ignoreResizeConfirmation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#ignore_resize_confirmation ComputeInstanceV2#ignore_resize_confirmation}.

---

### ComputeInstanceV2Volume <a name="ComputeInstanceV2Volume" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

const computeInstanceV2Volume: computeInstanceV2.ComputeInstanceV2Volume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.volumeId">volumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_id ComputeInstanceV2#volume_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.device">device</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device ComputeInstanceV2#device}. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#volume_id ComputeInstanceV2#volume_id}.

---

##### `device`<sup>Optional</sup> <a name="device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#device ComputeInstanceV2#device}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceV2BlockDeviceList <a name="ComputeInstanceV2BlockDeviceList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2BlockDeviceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get"></a>

```typescript
public get(index: number): ComputeInstanceV2BlockDeviceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2BlockDevice[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>[]

---


### ComputeInstanceV2BlockDeviceOutputReference <a name="ComputeInstanceV2BlockDeviceOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetBootIndex">resetBootIndex</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeleteOnTermination">resetDeleteOnTermination</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeviceType">resetDeviceType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDiskBus">resetDiskBus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetGuestFormat">resetGuestFormat</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetMultiattach">resetMultiattach</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetUuid">resetUuid</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBootIndex` <a name="resetBootIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetBootIndex"></a>

```typescript
public resetBootIndex(): void
```

##### `resetDeleteOnTermination` <a name="resetDeleteOnTermination" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeleteOnTermination"></a>

```typescript
public resetDeleteOnTermination(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetDeviceType` <a name="resetDeviceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDeviceType"></a>

```typescript
public resetDeviceType(): void
```

##### `resetDiskBus` <a name="resetDiskBus" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetDiskBus"></a>

```typescript
public resetDiskBus(): void
```

##### `resetGuestFormat` <a name="resetGuestFormat" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetGuestFormat"></a>

```typescript
public resetGuestFormat(): void
```

##### `resetMultiattach` <a name="resetMultiattach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetMultiattach"></a>

```typescript
public resetMultiattach(): void
```

##### `resetUuid` <a name="resetUuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndexInput">bootIndexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTerminationInput">deleteOnTerminationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceTypeInput">deviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBusInput">diskBusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormatInput">guestFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattachInput">multiattachInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndex">bootIndex</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceType">deviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBus">diskBus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormat">guestFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattach">multiattach</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootIndexInput`<sup>Optional</sup> <a name="bootIndexInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndexInput"></a>

```typescript
public readonly bootIndexInput: number;
```

- *Type:* number

---

##### `deleteOnTerminationInput`<sup>Optional</sup> <a name="deleteOnTerminationInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTerminationInput"></a>

```typescript
public readonly deleteOnTerminationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `deviceTypeInput`<sup>Optional</sup> <a name="deviceTypeInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceTypeInput"></a>

```typescript
public readonly deviceTypeInput: string;
```

- *Type:* string

---

##### `diskBusInput`<sup>Optional</sup> <a name="diskBusInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBusInput"></a>

```typescript
public readonly diskBusInput: string;
```

- *Type:* string

---

##### `guestFormatInput`<sup>Optional</sup> <a name="guestFormatInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormatInput"></a>

```typescript
public readonly guestFormatInput: string;
```

- *Type:* string

---

##### `multiattachInput`<sup>Optional</sup> <a name="multiattachInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattachInput"></a>

```typescript
public readonly multiattachInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `bootIndex`<sup>Required</sup> <a name="bootIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.bootIndex"></a>

```typescript
public readonly bootIndex: number;
```

- *Type:* number

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `deviceType`<sup>Required</sup> <a name="deviceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.deviceType"></a>

```typescript
public readonly deviceType: string;
```

- *Type:* string

---

##### `diskBus`<sup>Required</sup> <a name="diskBus" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.diskBus"></a>

```typescript
public readonly diskBus: string;
```

- *Type:* string

---

##### `guestFormat`<sup>Required</sup> <a name="guestFormat" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.guestFormat"></a>

```typescript
public readonly guestFormat: string;
```

- *Type:* string

---

##### `multiattach`<sup>Required</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.multiattach"></a>

```typescript
public readonly multiattach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDeviceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2BlockDevice;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2BlockDevice">ComputeInstanceV2BlockDevice</a>

---


### ComputeInstanceV2NetworkList <a name="ComputeInstanceV2NetworkList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2NetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.get"></a>

```typescript
public get(index: number): ComputeInstanceV2NetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2Network[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>[]

---


### ComputeInstanceV2NetworkOutputReference <a name="ComputeInstanceV2NetworkOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2NetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetAccessNetwork">resetAccessNetwork</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV4">resetFixedIpV4</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV6">resetFixedIpV6</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFloatingIp">resetFloatingIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetUuid">resetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessNetwork` <a name="resetAccessNetwork" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetAccessNetwork"></a>

```typescript
public resetAccessNetwork(): void
```

##### `resetFixedIpV4` <a name="resetFixedIpV4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV4"></a>

```typescript
public resetFixedIpV4(): void
```

##### `resetFixedIpV6` <a name="resetFixedIpV6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFixedIpV6"></a>

```typescript
public resetFixedIpV6(): void
```

##### `resetFloatingIp` <a name="resetFloatingIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetFloatingIp"></a>

```typescript
public resetFloatingIp(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPort` <a name="resetPort" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetUuid` <a name="resetUuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.resetUuid"></a>

```typescript
public resetUuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetworkInput">accessNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4Input">fixedIpV4Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6Input">fixedIpV6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIpInput">floatingIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuidInput">uuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetwork">accessNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4">fixedIpV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6">fixedIpV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIp">floatingIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mac`<sup>Required</sup> <a name="mac" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `accessNetworkInput`<sup>Optional</sup> <a name="accessNetworkInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetworkInput"></a>

```typescript
public readonly accessNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fixedIpV4Input`<sup>Optional</sup> <a name="fixedIpV4Input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4Input"></a>

```typescript
public readonly fixedIpV4Input: string;
```

- *Type:* string

---

##### `fixedIpV6Input`<sup>Optional</sup> <a name="fixedIpV6Input" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6Input"></a>

```typescript
public readonly fixedIpV6Input: string;
```

- *Type:* string

---

##### `floatingIpInput`<sup>Optional</sup> <a name="floatingIpInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIpInput"></a>

```typescript
public readonly floatingIpInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `uuidInput`<sup>Optional</sup> <a name="uuidInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuidInput"></a>

```typescript
public readonly uuidInput: string;
```

- *Type:* string

---

##### `accessNetwork`<sup>Required</sup> <a name="accessNetwork" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.accessNetwork"></a>

```typescript
public readonly accessNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fixedIpV4`<sup>Required</sup> <a name="fixedIpV4" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV4"></a>

```typescript
public readonly fixedIpV4: string;
```

- *Type:* string

---

##### `fixedIpV6`<sup>Required</sup> <a name="fixedIpV6" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.fixedIpV6"></a>

```typescript
public readonly fixedIpV6: string;
```

- *Type:* string

---

##### `floatingIp`<sup>Required</sup> <a name="floatingIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.floatingIp"></a>

```typescript
public readonly floatingIp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2NetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2Network;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Network">ComputeInstanceV2Network</a>

---


### ComputeInstanceV2PersonalityList <a name="ComputeInstanceV2PersonalityList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2PersonalityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.get"></a>

```typescript
public get(index: number): ComputeInstanceV2PersonalityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2Personality[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>[]

---


### ComputeInstanceV2PersonalityOutputReference <a name="ComputeInstanceV2PersonalityOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2PersonalityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2PersonalityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2Personality;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Personality">ComputeInstanceV2Personality</a>

---


### ComputeInstanceV2SchedulerHintsList <a name="ComputeInstanceV2SchedulerHintsList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2SchedulerHintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get"></a>

```typescript
public get(index: number): ComputeInstanceV2SchedulerHintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>[]

---


### ComputeInstanceV2SchedulerHintsOutputReference <a name="ComputeInstanceV2SchedulerHintsOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetBuildNearHostIp">resetBuildNearHostIp</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentCell">resetDifferentCell</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentHost">resetDifferentHost</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetSameHost">resetSameHost</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTargetCell">resetTargetCell</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetBuildNearHostIp` <a name="resetBuildNearHostIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetBuildNearHostIp"></a>

```typescript
public resetBuildNearHostIp(): void
```

##### `resetDifferentCell` <a name="resetDifferentCell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentCell"></a>

```typescript
public resetDifferentCell(): void
```

##### `resetDifferentHost` <a name="resetDifferentHost" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetDifferentHost"></a>

```typescript
public resetDifferentHost(): void
```

##### `resetGroup` <a name="resetGroup" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetQuery` <a name="resetQuery" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetSameHost` <a name="resetSameHost" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetSameHost"></a>

```typescript
public resetSameHost(): void
```

##### `resetTargetCell` <a name="resetTargetCell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.resetTargetCell"></a>

```typescript
public resetTargetCell(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIpInput">buildNearHostIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCellInput">differentCellInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHostInput">differentHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.groupInput">groupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.queryInput">queryInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHostInput">sameHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCellInput">targetCellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIp">buildNearHostIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCell">differentCell</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHost">differentHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.query">query</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHost">sameHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCell">targetCell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildNearHostIpInput`<sup>Optional</sup> <a name="buildNearHostIpInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIpInput"></a>

```typescript
public readonly buildNearHostIpInput: string;
```

- *Type:* string

---

##### `differentCellInput`<sup>Optional</sup> <a name="differentCellInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCellInput"></a>

```typescript
public readonly differentCellInput: string[];
```

- *Type:* string[]

---

##### `differentHostInput`<sup>Optional</sup> <a name="differentHostInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHostInput"></a>

```typescript
public readonly differentHostInput: string[];
```

- *Type:* string[]

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string[];
```

- *Type:* string[]

---

##### `sameHostInput`<sup>Optional</sup> <a name="sameHostInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHostInput"></a>

```typescript
public readonly sameHostInput: string[];
```

- *Type:* string[]

---

##### `targetCellInput`<sup>Optional</sup> <a name="targetCellInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCellInput"></a>

```typescript
public readonly targetCellInput: string;
```

- *Type:* string

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildNearHostIp`<sup>Required</sup> <a name="buildNearHostIp" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.buildNearHostIp"></a>

```typescript
public readonly buildNearHostIp: string;
```

- *Type:* string

---

##### `differentCell`<sup>Required</sup> <a name="differentCell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentCell"></a>

```typescript
public readonly differentCell: string[];
```

- *Type:* string[]

---

##### `differentHost`<sup>Required</sup> <a name="differentHost" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.differentHost"></a>

```typescript
public readonly differentHost: string[];
```

- *Type:* string[]

---

##### `group`<sup>Required</sup> <a name="group" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.query"></a>

```typescript
public readonly query: string[];
```

- *Type:* string[]

---

##### `sameHost`<sup>Required</sup> <a name="sameHost" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.sameHost"></a>

```typescript
public readonly sameHost: string[];
```

- *Type:* string[]

---

##### `targetCell`<sup>Required</sup> <a name="targetCell" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.targetCell"></a>

```typescript
public readonly targetCell: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2SchedulerHints;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2SchedulerHints">ComputeInstanceV2SchedulerHints</a>

---


### ComputeInstanceV2TimeoutsOutputReference <a name="ComputeInstanceV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Timeouts">ComputeInstanceV2Timeouts</a>

---


### ComputeInstanceV2VendorOptionsOutputReference <a name="ComputeInstanceV2VendorOptionsOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetDetachPortsBeforeDestroy">resetDetachPortsBeforeDestroy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetIgnoreResizeConfirmation">resetIgnoreResizeConfirmation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDetachPortsBeforeDestroy` <a name="resetDetachPortsBeforeDestroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetDetachPortsBeforeDestroy"></a>

```typescript
public resetDetachPortsBeforeDestroy(): void
```

##### `resetIgnoreResizeConfirmation` <a name="resetIgnoreResizeConfirmation" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.resetIgnoreResizeConfirmation"></a>

```typescript
public resetIgnoreResizeConfirmation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroyInput">detachPortsBeforeDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmationInput">ignoreResizeConfirmationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroy">detachPortsBeforeDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmation">ignoreResizeConfirmation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `detachPortsBeforeDestroyInput`<sup>Optional</sup> <a name="detachPortsBeforeDestroyInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroyInput"></a>

```typescript
public readonly detachPortsBeforeDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreResizeConfirmationInput`<sup>Optional</sup> <a name="ignoreResizeConfirmationInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmationInput"></a>

```typescript
public readonly ignoreResizeConfirmationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detachPortsBeforeDestroy`<sup>Required</sup> <a name="detachPortsBeforeDestroy" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.detachPortsBeforeDestroy"></a>

```typescript
public readonly detachPortsBeforeDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreResizeConfirmation`<sup>Required</sup> <a name="ignoreResizeConfirmation" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.ignoreResizeConfirmation"></a>

```typescript
public readonly ignoreResizeConfirmation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ComputeInstanceV2VendorOptions;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VendorOptions">ComputeInstanceV2VendorOptions</a>

---


### ComputeInstanceV2VolumeList <a name="ComputeInstanceV2VolumeList" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2VolumeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.get"></a>

```typescript
public get(index: number): ComputeInstanceV2VolumeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2Volume[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>[]

---


### ComputeInstanceV2VolumeOutputReference <a name="ComputeInstanceV2VolumeOutputReference" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer"></a>

```typescript
import { computeInstanceV2 } from '@ithings/cdktf-provider-openstack'

new computeInstanceV2.ComputeInstanceV2VolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDevice` <a name="resetDevice" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetDevice"></a>

```typescript
public resetDevice(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.resetId"></a>

```typescript
public resetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.deviceInput">deviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.deviceInput"></a>

```typescript
public readonly deviceInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2VolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceV2Volume;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.computeInstanceV2.ComputeInstanceV2Volume">ComputeInstanceV2Volume</a>

---




# `blockstorageVolumeV3` Submodule <a name="`blockstorageVolumeV3` Submodule" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageVolumeV3 <a name="BlockstorageVolumeV3" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3 openstack_blockstorage_volume_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV3.BlockstorageVolumeV3(scope: Construct, id: string, config: BlockstorageVolumeV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config">BlockstorageVolumeV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config">BlockstorageVolumeV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putSchedulerHints">putSchedulerHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetBackupId">resetBackupId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetConsistencyGroupId">resetConsistencyGroupId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetEnableOnlineResize">resetEnableOnlineResize</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMultiattach">resetMultiattach</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSchedulerHints">resetSchedulerHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceReplica">resetSourceReplica</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceVolId">resetSourceVolId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedulerHints` <a name="putSchedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putSchedulerHints"></a>

```typescript
public putSchedulerHints(value: IResolvable | BlockstorageVolumeV3SchedulerHints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putSchedulerHints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putTimeouts"></a>

```typescript
public putTimeouts(value: BlockstorageVolumeV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBackupId` <a name="resetBackupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetBackupId"></a>

```typescript
public resetBackupId(): void
```

##### `resetConsistencyGroupId` <a name="resetConsistencyGroupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetConsistencyGroupId"></a>

```typescript
public resetConsistencyGroupId(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableOnlineResize` <a name="resetEnableOnlineResize" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetEnableOnlineResize"></a>

```typescript
public resetEnableOnlineResize(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetMultiattach` <a name="resetMultiattach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetMultiattach"></a>

```typescript
public resetMultiattach(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSchedulerHints` <a name="resetSchedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSchedulerHints"></a>

```typescript
public resetSchedulerHints(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetSourceReplica` <a name="resetSourceReplica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceReplica"></a>

```typescript
public resetSourceReplica(): void
```

##### `resetSourceVolId` <a name="resetSourceVolId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetSourceVolId"></a>

```typescript
public resetSourceVolId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isConstruct"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV3.BlockstorageVolumeV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformElement"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformResource"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockstorageVolumeV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockstorageVolumeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockstorageVolumeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.attachment">attachment</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList">BlockstorageVolumeV3AttachmentList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHints">schedulerHints</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList">BlockstorageVolumeV3SchedulerHintsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference">BlockstorageVolumeV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupIdInput">backupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupIdInput">consistencyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResizeInput">enableOnlineResizeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattachInput">multiattachInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHintsInput">schedulerHintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplicaInput">sourceReplicaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolIdInput">sourceVolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupId">backupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupId">consistencyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResize">enableOnlineResize</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattach">multiattach</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplica">sourceReplica</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolId">sourceVolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.attachment"></a>

```typescript
public readonly attachment: BlockstorageVolumeV3AttachmentList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList">BlockstorageVolumeV3AttachmentList</a>

---

##### `schedulerHints`<sup>Required</sup> <a name="schedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHints"></a>

```typescript
public readonly schedulerHints: BlockstorageVolumeV3SchedulerHintsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList">BlockstorageVolumeV3SchedulerHintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageVolumeV3TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference">BlockstorageVolumeV3TimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `backupIdInput`<sup>Optional</sup> <a name="backupIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupIdInput"></a>

```typescript
public readonly backupIdInput: string;
```

- *Type:* string

---

##### `consistencyGroupIdInput`<sup>Optional</sup> <a name="consistencyGroupIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupIdInput"></a>

```typescript
public readonly consistencyGroupIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableOnlineResizeInput`<sup>Optional</sup> <a name="enableOnlineResizeInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResizeInput"></a>

```typescript
public readonly enableOnlineResizeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `multiattachInput`<sup>Optional</sup> <a name="multiattachInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattachInput"></a>

```typescript
public readonly multiattachInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `schedulerHintsInput`<sup>Optional</sup> <a name="schedulerHintsInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.schedulerHintsInput"></a>

```typescript
public readonly schedulerHintsInput: IResolvable | BlockstorageVolumeV3SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>[]

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `sourceReplicaInput`<sup>Optional</sup> <a name="sourceReplicaInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplicaInput"></a>

```typescript
public readonly sourceReplicaInput: string;
```

- *Type:* string

---

##### `sourceVolIdInput`<sup>Optional</sup> <a name="sourceVolIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolIdInput"></a>

```typescript
public readonly sourceVolIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BlockstorageVolumeV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `backupId`<sup>Required</sup> <a name="backupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

---

##### `consistencyGroupId`<sup>Required</sup> <a name="consistencyGroupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.consistencyGroupId"></a>

```typescript
public readonly consistencyGroupId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableOnlineResize`<sup>Required</sup> <a name="enableOnlineResize" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.enableOnlineResize"></a>

```typescript
public readonly enableOnlineResize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `multiattach`<sup>Required</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.multiattach"></a>

```typescript
public readonly multiattach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `sourceReplica`<sup>Required</sup> <a name="sourceReplica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceReplica"></a>

```typescript
public readonly sourceReplica: string;
```

- *Type:* string

---

##### `sourceVolId`<sup>Required</sup> <a name="sourceVolId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.sourceVolId"></a>

```typescript
public readonly sourceVolId: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageVolumeV3Attachment <a name="BlockstorageVolumeV3Attachment" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV3Attachment: blockstorageVolumeV3.BlockstorageVolumeV3Attachment = { ... }
```


### BlockstorageVolumeV3Config <a name="BlockstorageVolumeV3Config" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV3Config: blockstorageVolumeV3.BlockstorageVolumeV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#size BlockstorageVolumeV3#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#availability_zone BlockstorageVolumeV3#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.backupId">backupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#backup_id BlockstorageVolumeV3#backup_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.consistencyGroupId">consistencyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#consistency_group_id BlockstorageVolumeV3#consistency_group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#description BlockstorageVolumeV3#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.enableOnlineResize">enableOnlineResize</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#enable_online_resize BlockstorageVolumeV3#enable_online_resize}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#id BlockstorageVolumeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#image_id BlockstorageVolumeV3#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#metadata BlockstorageVolumeV3#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.multiattach">multiattach</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#multiattach BlockstorageVolumeV3#multiattach}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#name BlockstorageVolumeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#region BlockstorageVolumeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.schedulerHints">schedulerHints</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>[]</code> | scheduler_hints block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#snapshot_id BlockstorageVolumeV3#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceReplica">sourceReplica</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_replica BlockstorageVolumeV3#source_replica}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceVolId">sourceVolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_vol_id BlockstorageVolumeV3#source_vol_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#volume_type BlockstorageVolumeV3#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#size BlockstorageVolumeV3#size}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#availability_zone BlockstorageVolumeV3#availability_zone}.

---

##### `backupId`<sup>Optional</sup> <a name="backupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.backupId"></a>

```typescript
public readonly backupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#backup_id BlockstorageVolumeV3#backup_id}.

---

##### `consistencyGroupId`<sup>Optional</sup> <a name="consistencyGroupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.consistencyGroupId"></a>

```typescript
public readonly consistencyGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#consistency_group_id BlockstorageVolumeV3#consistency_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#description BlockstorageVolumeV3#description}.

---

##### `enableOnlineResize`<sup>Optional</sup> <a name="enableOnlineResize" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.enableOnlineResize"></a>

```typescript
public readonly enableOnlineResize: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#enable_online_resize BlockstorageVolumeV3#enable_online_resize}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#id BlockstorageVolumeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#image_id BlockstorageVolumeV3#image_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#metadata BlockstorageVolumeV3#metadata}.

---

##### `multiattach`<sup>Optional</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.multiattach"></a>

```typescript
public readonly multiattach: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#multiattach BlockstorageVolumeV3#multiattach}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#name BlockstorageVolumeV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#region BlockstorageVolumeV3#region}.

---

##### `schedulerHints`<sup>Optional</sup> <a name="schedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.schedulerHints"></a>

```typescript
public readonly schedulerHints: IResolvable | BlockstorageVolumeV3SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>[]

scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#scheduler_hints BlockstorageVolumeV3#scheduler_hints}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#snapshot_id BlockstorageVolumeV3#snapshot_id}.

---

##### `sourceReplica`<sup>Optional</sup> <a name="sourceReplica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceReplica"></a>

```typescript
public readonly sourceReplica: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_replica BlockstorageVolumeV3#source_replica}.

---

##### `sourceVolId`<sup>Optional</sup> <a name="sourceVolId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.sourceVolId"></a>

```typescript
public readonly sourceVolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#source_vol_id BlockstorageVolumeV3#source_vol_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageVolumeV3Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#timeouts BlockstorageVolumeV3#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Config.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#volume_type BlockstorageVolumeV3#volume_type}.

---

### BlockstorageVolumeV3SchedulerHints <a name="BlockstorageVolumeV3SchedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV3SchedulerHints: blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#additional_properties BlockstorageVolumeV3#additional_properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.differentHost">differentHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#different_host BlockstorageVolumeV3#different_host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.localToInstance">localToInstance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#local_to_instance BlockstorageVolumeV3#local_to_instance}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#query BlockstorageVolumeV3#query}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.sameHost">sameHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#same_host BlockstorageVolumeV3#same_host}. |

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#additional_properties BlockstorageVolumeV3#additional_properties}.

---

##### `differentHost`<sup>Optional</sup> <a name="differentHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.differentHost"></a>

```typescript
public readonly differentHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#different_host BlockstorageVolumeV3#different_host}.

---

##### `localToInstance`<sup>Optional</sup> <a name="localToInstance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.localToInstance"></a>

```typescript
public readonly localToInstance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#local_to_instance BlockstorageVolumeV3#local_to_instance}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#query BlockstorageVolumeV3#query}.

---

##### `sameHost`<sup>Optional</sup> <a name="sameHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints.property.sameHost"></a>

```typescript
public readonly sameHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#same_host BlockstorageVolumeV3#same_host}.

---

### BlockstorageVolumeV3Timeouts <a name="BlockstorageVolumeV3Timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV3Timeouts: blockstorageVolumeV3.BlockstorageVolumeV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#create BlockstorageVolumeV3#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#delete BlockstorageVolumeV3#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#create BlockstorageVolumeV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v3#delete BlockstorageVolumeV3#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageVolumeV3AttachmentList <a name="BlockstorageVolumeV3AttachmentList" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.get"></a>

```typescript
public get(index: number): BlockstorageVolumeV3AttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockstorageVolumeV3AttachmentOutputReference <a name="BlockstorageVolumeV3AttachmentOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment">BlockstorageVolumeV3Attachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3AttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockstorageVolumeV3Attachment;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Attachment">BlockstorageVolumeV3Attachment</a>

---


### BlockstorageVolumeV3SchedulerHintsList <a name="BlockstorageVolumeV3SchedulerHintsList" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.get"></a>

```typescript
public get(index: number): BlockstorageVolumeV3SchedulerHintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageVolumeV3SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>[]

---


### BlockstorageVolumeV3SchedulerHintsOutputReference <a name="BlockstorageVolumeV3SchedulerHintsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetDifferentHost">resetDifferentHost</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetLocalToInstance">resetLocalToInstance</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetSameHost">resetSameHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetDifferentHost` <a name="resetDifferentHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetDifferentHost"></a>

```typescript
public resetDifferentHost(): void
```

##### `resetLocalToInstance` <a name="resetLocalToInstance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetLocalToInstance"></a>

```typescript
public resetLocalToInstance(): void
```

##### `resetQuery` <a name="resetQuery" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetSameHost` <a name="resetSameHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.resetSameHost"></a>

```typescript
public resetSameHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHostInput">differentHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstanceInput">localToInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHostInput">sameHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHost">differentHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstance">localToInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHost">sameHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `differentHostInput`<sup>Optional</sup> <a name="differentHostInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHostInput"></a>

```typescript
public readonly differentHostInput: string[];
```

- *Type:* string[]

---

##### `localToInstanceInput`<sup>Optional</sup> <a name="localToInstanceInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstanceInput"></a>

```typescript
public readonly localToInstanceInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `sameHostInput`<sup>Optional</sup> <a name="sameHostInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHostInput"></a>

```typescript
public readonly sameHostInput: string[];
```

- *Type:* string[]

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `differentHost`<sup>Required</sup> <a name="differentHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.differentHost"></a>

```typescript
public readonly differentHost: string[];
```

- *Type:* string[]

---

##### `localToInstance`<sup>Required</sup> <a name="localToInstance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.localToInstance"></a>

```typescript
public readonly localToInstance: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `sameHost`<sup>Required</sup> <a name="sameHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.sameHost"></a>

```typescript
public readonly sameHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageVolumeV3SchedulerHints;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3SchedulerHints">BlockstorageVolumeV3SchedulerHints</a>

---


### BlockstorageVolumeV3TimeoutsOutputReference <a name="BlockstorageVolumeV3TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { blockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageVolumeV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV3.BlockstorageVolumeV3Timeouts">BlockstorageVolumeV3Timeouts</a>

---




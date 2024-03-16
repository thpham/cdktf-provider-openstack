# `blockstorageVolumeV2` Submodule <a name="`blockstorageVolumeV2` Submodule" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageVolumeV2 <a name="BlockstorageVolumeV2" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2 openstack_blockstorage_volume_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV2.BlockstorageVolumeV2(scope: Construct, id: string, config: BlockstorageVolumeV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config">BlockstorageVolumeV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config">BlockstorageVolumeV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.putSchedulerHints">putSchedulerHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetConsistencyGroupId">resetConsistencyGroupId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSchedulerHints">resetSchedulerHints</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceReplica">resetSourceReplica</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceVolId">resetSourceVolId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedulerHints` <a name="putSchedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.putSchedulerHints"></a>

```typescript
public putSchedulerHints(value: IResolvable | BlockstorageVolumeV2SchedulerHints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.putSchedulerHints.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts"></a>

```typescript
public putTimeouts(value: BlockstorageVolumeV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetConsistencyGroupId` <a name="resetConsistencyGroupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetConsistencyGroupId"></a>

```typescript
public resetConsistencyGroupId(): void
```

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageId` <a name="resetImageId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSchedulerHints` <a name="resetSchedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSchedulerHints"></a>

```typescript
public resetSchedulerHints(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetSourceReplica` <a name="resetSourceReplica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceReplica"></a>

```typescript
public resetSourceReplica(): void
```

##### `resetSourceVolId` <a name="resetSourceVolId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetSourceVolId"></a>

```typescript
public resetSourceVolId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockstorageVolumeV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.generateConfigForImport"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeV2.BlockstorageVolumeV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BlockstorageVolumeV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockstorageVolumeV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockstorageVolumeV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockstorageVolumeV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.attachment">attachment</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList">BlockstorageVolumeV2AttachmentList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.schedulerHints">schedulerHints</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList">BlockstorageVolumeV2SchedulerHintsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference">BlockstorageVolumeV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupIdInput">consistencyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.schedulerHintsInput">schedulerHintsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplicaInput">sourceReplicaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolIdInput">sourceVolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupId">consistencyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplica">sourceReplica</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolId">sourceVolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.attachment"></a>

```typescript
public readonly attachment: BlockstorageVolumeV2AttachmentList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList">BlockstorageVolumeV2AttachmentList</a>

---

##### `schedulerHints`<sup>Required</sup> <a name="schedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.schedulerHints"></a>

```typescript
public readonly schedulerHints: BlockstorageVolumeV2SchedulerHintsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList">BlockstorageVolumeV2SchedulerHintsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageVolumeV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference">BlockstorageVolumeV2TimeoutsOutputReference</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `consistencyGroupIdInput`<sup>Optional</sup> <a name="consistencyGroupIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupIdInput"></a>

```typescript
public readonly consistencyGroupIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `schedulerHintsInput`<sup>Optional</sup> <a name="schedulerHintsInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.schedulerHintsInput"></a>

```typescript
public readonly schedulerHintsInput: IResolvable | BlockstorageVolumeV2SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>[]

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `sourceReplicaInput`<sup>Optional</sup> <a name="sourceReplicaInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplicaInput"></a>

```typescript
public readonly sourceReplicaInput: string;
```

- *Type:* string

---

##### `sourceVolIdInput`<sup>Optional</sup> <a name="sourceVolIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolIdInput"></a>

```typescript
public readonly sourceVolIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BlockstorageVolumeV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `consistencyGroupId`<sup>Required</sup> <a name="consistencyGroupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.consistencyGroupId"></a>

```typescript
public readonly consistencyGroupId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `sourceReplica`<sup>Required</sup> <a name="sourceReplica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceReplica"></a>

```typescript
public readonly sourceReplica: string;
```

- *Type:* string

---

##### `sourceVolId`<sup>Required</sup> <a name="sourceVolId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.sourceVolId"></a>

```typescript
public readonly sourceVolId: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageVolumeV2Attachment <a name="BlockstorageVolumeV2Attachment" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Attachment"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Attachment.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV2Attachment: blockstorageVolumeV2.BlockstorageVolumeV2Attachment = { ... }
```


### BlockstorageVolumeV2Config <a name="BlockstorageVolumeV2Config" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV2Config: blockstorageVolumeV2.BlockstorageVolumeV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#size BlockstorageVolumeV2#size}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.consistencyGroupId">consistencyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#description BlockstorageVolumeV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#id BlockstorageVolumeV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#name BlockstorageVolumeV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#region BlockstorageVolumeV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.schedulerHints">schedulerHints</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>[]</code> | scheduler_hints block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceReplica">sourceReplica</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceVolId">sourceVolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#size BlockstorageVolumeV2#size}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#availability_zone BlockstorageVolumeV2#availability_zone}.

---

##### `consistencyGroupId`<sup>Optional</sup> <a name="consistencyGroupId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.consistencyGroupId"></a>

```typescript
public readonly consistencyGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#consistency_group_id BlockstorageVolumeV2#consistency_group_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#description BlockstorageVolumeV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#id BlockstorageVolumeV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#image_id BlockstorageVolumeV2#image_id}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#metadata BlockstorageVolumeV2#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#name BlockstorageVolumeV2#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#region BlockstorageVolumeV2#region}.

---

##### `schedulerHints`<sup>Optional</sup> <a name="schedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.schedulerHints"></a>

```typescript
public readonly schedulerHints: IResolvable | BlockstorageVolumeV2SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>[]

scheduler_hints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#scheduler_hints BlockstorageVolumeV2#scheduler_hints}

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#snapshot_id BlockstorageVolumeV2#snapshot_id}.

---

##### `sourceReplica`<sup>Optional</sup> <a name="sourceReplica" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceReplica"></a>

```typescript
public readonly sourceReplica: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#source_replica BlockstorageVolumeV2#source_replica}.

---

##### `sourceVolId`<sup>Optional</sup> <a name="sourceVolId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.sourceVolId"></a>

```typescript
public readonly sourceVolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#source_vol_id BlockstorageVolumeV2#source_vol_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageVolumeV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#timeouts BlockstorageVolumeV2#timeouts}

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Config.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#volume_type BlockstorageVolumeV2#volume_type}.

---

### BlockstorageVolumeV2SchedulerHints <a name="BlockstorageVolumeV2SchedulerHints" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV2SchedulerHints: blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#additional_properties BlockstorageVolumeV2#additional_properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.differentHost">differentHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#different_host BlockstorageVolumeV2#different_host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.localToInstance">localToInstance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#local_to_instance BlockstorageVolumeV2#local_to_instance}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#query BlockstorageVolumeV2#query}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.sameHost">sameHost</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#same_host BlockstorageVolumeV2#same_host}. |

---

##### `additionalProperties`<sup>Optional</sup> <a name="additionalProperties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#additional_properties BlockstorageVolumeV2#additional_properties}.

---

##### `differentHost`<sup>Optional</sup> <a name="differentHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.differentHost"></a>

```typescript
public readonly differentHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#different_host BlockstorageVolumeV2#different_host}.

---

##### `localToInstance`<sup>Optional</sup> <a name="localToInstance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.localToInstance"></a>

```typescript
public readonly localToInstance: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#local_to_instance BlockstorageVolumeV2#local_to_instance}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#query BlockstorageVolumeV2#query}.

---

##### `sameHost`<sup>Optional</sup> <a name="sameHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints.property.sameHost"></a>

```typescript
public readonly sameHost: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#same_host BlockstorageVolumeV2#same_host}.

---

### BlockstorageVolumeV2Timeouts <a name="BlockstorageVolumeV2Timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeV2Timeouts: blockstorageVolumeV2.BlockstorageVolumeV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#create BlockstorageVolumeV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#delete BlockstorageVolumeV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#create BlockstorageVolumeV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_v2#delete BlockstorageVolumeV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageVolumeV2AttachmentList <a name="BlockstorageVolumeV2AttachmentList" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get"></a>

```typescript
public get(index: number): BlockstorageVolumeV2AttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BlockstorageVolumeV2AttachmentOutputReference <a name="BlockstorageVolumeV2AttachmentOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Attachment">BlockstorageVolumeV2Attachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2AttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockstorageVolumeV2Attachment;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Attachment">BlockstorageVolumeV2Attachment</a>

---


### BlockstorageVolumeV2SchedulerHintsList <a name="BlockstorageVolumeV2SchedulerHintsList" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.get"></a>

```typescript
public get(index: number): BlockstorageVolumeV2SchedulerHintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageVolumeV2SchedulerHints[];
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>[]

---


### BlockstorageVolumeV2SchedulerHintsOutputReference <a name="BlockstorageVolumeV2SchedulerHintsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetAdditionalProperties">resetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetDifferentHost">resetDifferentHost</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetLocalToInstance">resetLocalToInstance</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetSameHost">resetSameHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalProperties` <a name="resetAdditionalProperties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetAdditionalProperties"></a>

```typescript
public resetAdditionalProperties(): void
```

##### `resetDifferentHost` <a name="resetDifferentHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetDifferentHost"></a>

```typescript
public resetDifferentHost(): void
```

##### `resetLocalToInstance` <a name="resetLocalToInstance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetLocalToInstance"></a>

```typescript
public resetLocalToInstance(): void
```

##### `resetQuery` <a name="resetQuery" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetSameHost` <a name="resetSameHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.resetSameHost"></a>

```typescript
public resetSameHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.additionalPropertiesInput">additionalPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.differentHostInput">differentHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.localToInstanceInput">localToInstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.sameHostInput">sameHostInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.additionalProperties">additionalProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.differentHost">differentHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.localToInstance">localToInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.sameHost">sameHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalPropertiesInput`<sup>Optional</sup> <a name="additionalPropertiesInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.additionalPropertiesInput"></a>

```typescript
public readonly additionalPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `differentHostInput`<sup>Optional</sup> <a name="differentHostInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.differentHostInput"></a>

```typescript
public readonly differentHostInput: string[];
```

- *Type:* string[]

---

##### `localToInstanceInput`<sup>Optional</sup> <a name="localToInstanceInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.localToInstanceInput"></a>

```typescript
public readonly localToInstanceInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `sameHostInput`<sup>Optional</sup> <a name="sameHostInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.sameHostInput"></a>

```typescript
public readonly sameHostInput: string[];
```

- *Type:* string[]

---

##### `additionalProperties`<sup>Required</sup> <a name="additionalProperties" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.additionalProperties"></a>

```typescript
public readonly additionalProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `differentHost`<sup>Required</sup> <a name="differentHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.differentHost"></a>

```typescript
public readonly differentHost: string[];
```

- *Type:* string[]

---

##### `localToInstance`<sup>Required</sup> <a name="localToInstance" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.localToInstance"></a>

```typescript
public readonly localToInstance: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `sameHost`<sup>Required</sup> <a name="sameHost" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.sameHost"></a>

```typescript
public readonly sameHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageVolumeV2SchedulerHints;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2SchedulerHints">BlockstorageVolumeV2SchedulerHints</a>

---


### BlockstorageVolumeV2TimeoutsOutputReference <a name="BlockstorageVolumeV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { blockstorageVolumeV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageVolumeV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeV2.BlockstorageVolumeV2Timeouts">BlockstorageVolumeV2Timeouts</a>

---




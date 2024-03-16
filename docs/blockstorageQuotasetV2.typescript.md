# `blockstorageQuotasetV2` Submodule <a name="`blockstorageQuotasetV2` Submodule" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageQuotasetV2 <a name="BlockstorageQuotasetV2" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2 openstack_blockstorage_quotaset_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.Initializer"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageQuotasetV2.BlockstorageQuotasetV2(scope: Construct, id: string, config: BlockstorageQuotasetV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config">BlockstorageQuotasetV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config">BlockstorageQuotasetV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetBackupGigabytes">resetBackupGigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetBackups">resetBackups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetGigabytes">resetGigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetPerVolumeGigabytes">resetPerVolumeGigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetSnapshots">resetSnapshots</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetVolumeTypeQuota">resetVolumeTypeQuota</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.putTimeouts"></a>

```typescript
public putTimeouts(value: BlockstorageQuotasetV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts">BlockstorageQuotasetV2Timeouts</a>

---

##### `resetBackupGigabytes` <a name="resetBackupGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetBackupGigabytes"></a>

```typescript
public resetBackupGigabytes(): void
```

##### `resetBackups` <a name="resetBackups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetBackups"></a>

```typescript
public resetBackups(): void
```

##### `resetGigabytes` <a name="resetGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetGigabytes"></a>

```typescript
public resetGigabytes(): void
```

##### `resetGroups` <a name="resetGroups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPerVolumeGigabytes` <a name="resetPerVolumeGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetPerVolumeGigabytes"></a>

```typescript
public resetPerVolumeGigabytes(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSnapshots` <a name="resetSnapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetSnapshots"></a>

```typescript
public resetSnapshots(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

##### `resetVolumeTypeQuota` <a name="resetVolumeTypeQuota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.resetVolumeTypeQuota"></a>

```typescript
public resetVolumeTypeQuota(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockstorageQuotasetV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isConstruct"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV2.BlockstorageQuotasetV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformElement"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformResource"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.generateConfigForImport"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV2.BlockstorageQuotasetV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BlockstorageQuotasetV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockstorageQuotasetV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockstorageQuotasetV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockstorageQuotasetV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference">BlockstorageQuotasetV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backupGigabytesInput">backupGigabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backupsInput">backupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.gigabytesInput">gigabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.groupsInput">groupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.perVolumeGigabytesInput">perVolumeGigabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.snapshotsInput">snapshotsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts">BlockstorageQuotasetV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumesInput">volumesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumeTypeQuotaInput">volumeTypeQuotaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backupGigabytes">backupGigabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backups">backups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.gigabytes">gigabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.groups">groups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.perVolumeGigabytes">perVolumeGigabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.snapshots">snapshots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumes">volumes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumeTypeQuota">volumeTypeQuota</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageQuotasetV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference">BlockstorageQuotasetV2TimeoutsOutputReference</a>

---

##### `backupGigabytesInput`<sup>Optional</sup> <a name="backupGigabytesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backupGigabytesInput"></a>

```typescript
public readonly backupGigabytesInput: number;
```

- *Type:* number

---

##### `backupsInput`<sup>Optional</sup> <a name="backupsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backupsInput"></a>

```typescript
public readonly backupsInput: number;
```

- *Type:* number

---

##### `gigabytesInput`<sup>Optional</sup> <a name="gigabytesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.gigabytesInput"></a>

```typescript
public readonly gigabytesInput: number;
```

- *Type:* number

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.groupsInput"></a>

```typescript
public readonly groupsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `perVolumeGigabytesInput`<sup>Optional</sup> <a name="perVolumeGigabytesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.perVolumeGigabytesInput"></a>

```typescript
public readonly perVolumeGigabytesInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `snapshotsInput`<sup>Optional</sup> <a name="snapshotsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.snapshotsInput"></a>

```typescript
public readonly snapshotsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: BlockstorageQuotasetV2Timeouts | IResolvable;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts">BlockstorageQuotasetV2Timeouts</a> | cdktf.IResolvable

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumesInput"></a>

```typescript
public readonly volumesInput: number;
```

- *Type:* number

---

##### `volumeTypeQuotaInput`<sup>Optional</sup> <a name="volumeTypeQuotaInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumeTypeQuotaInput"></a>

```typescript
public readonly volumeTypeQuotaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupGigabytes`<sup>Required</sup> <a name="backupGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backupGigabytes"></a>

```typescript
public readonly backupGigabytes: number;
```

- *Type:* number

---

##### `backups`<sup>Required</sup> <a name="backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.backups"></a>

```typescript
public readonly backups: number;
```

- *Type:* number

---

##### `gigabytes`<sup>Required</sup> <a name="gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.gigabytes"></a>

```typescript
public readonly gigabytes: number;
```

- *Type:* number

---

##### `groups`<sup>Required</sup> <a name="groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.groups"></a>

```typescript
public readonly groups: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `perVolumeGigabytes`<sup>Required</sup> <a name="perVolumeGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.perVolumeGigabytes"></a>

```typescript
public readonly perVolumeGigabytes: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.snapshots"></a>

```typescript
public readonly snapshots: number;
```

- *Type:* number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumes"></a>

```typescript
public readonly volumes: number;
```

- *Type:* number

---

##### `volumeTypeQuota`<sup>Required</sup> <a name="volumeTypeQuota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.volumeTypeQuota"></a>

```typescript
public readonly volumeTypeQuota: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageQuotasetV2Config <a name="BlockstorageQuotasetV2Config" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.Initializer"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageQuotasetV2Config: blockstorageQuotasetV2.BlockstorageQuotasetV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#project_id BlockstorageQuotasetV2#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.backupGigabytes">backupGigabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#backup_gigabytes BlockstorageQuotasetV2#backup_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.backups">backups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#backups BlockstorageQuotasetV2#backups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.gigabytes">gigabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#gigabytes BlockstorageQuotasetV2#gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.groups">groups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#groups BlockstorageQuotasetV2#groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#id BlockstorageQuotasetV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.perVolumeGigabytes">perVolumeGigabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#per_volume_gigabytes BlockstorageQuotasetV2#per_volume_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#region BlockstorageQuotasetV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.snapshots">snapshots</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#snapshots BlockstorageQuotasetV2#snapshots}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts">BlockstorageQuotasetV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.volumes">volumes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#volumes BlockstorageQuotasetV2#volumes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.volumeTypeQuota">volumeTypeQuota</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#volume_type_quota BlockstorageQuotasetV2#volume_type_quota}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#project_id BlockstorageQuotasetV2#project_id}.

---

##### `backupGigabytes`<sup>Optional</sup> <a name="backupGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.backupGigabytes"></a>

```typescript
public readonly backupGigabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#backup_gigabytes BlockstorageQuotasetV2#backup_gigabytes}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.backups"></a>

```typescript
public readonly backups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#backups BlockstorageQuotasetV2#backups}.

---

##### `gigabytes`<sup>Optional</sup> <a name="gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.gigabytes"></a>

```typescript
public readonly gigabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#gigabytes BlockstorageQuotasetV2#gigabytes}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.groups"></a>

```typescript
public readonly groups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#groups BlockstorageQuotasetV2#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#id BlockstorageQuotasetV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perVolumeGigabytes`<sup>Optional</sup> <a name="perVolumeGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.perVolumeGigabytes"></a>

```typescript
public readonly perVolumeGigabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#per_volume_gigabytes BlockstorageQuotasetV2#per_volume_gigabytes}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#region BlockstorageQuotasetV2#region}.

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.snapshots"></a>

```typescript
public readonly snapshots: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#snapshots BlockstorageQuotasetV2#snapshots}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageQuotasetV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts">BlockstorageQuotasetV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#timeouts BlockstorageQuotasetV2#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.volumes"></a>

```typescript
public readonly volumes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#volumes BlockstorageQuotasetV2#volumes}.

---

##### `volumeTypeQuota`<sup>Optional</sup> <a name="volumeTypeQuota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Config.property.volumeTypeQuota"></a>

```typescript
public readonly volumeTypeQuota: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#volume_type_quota BlockstorageQuotasetV2#volume_type_quota}.

---

### BlockstorageQuotasetV2Timeouts <a name="BlockstorageQuotasetV2Timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts.Initializer"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageQuotasetV2Timeouts: blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#create BlockstorageQuotasetV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#delete BlockstorageQuotasetV2#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#update BlockstorageQuotasetV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#create BlockstorageQuotasetV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#delete BlockstorageQuotasetV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v2#update BlockstorageQuotasetV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageQuotasetV2TimeoutsOutputReference <a name="BlockstorageQuotasetV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { blockstorageQuotasetV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts">BlockstorageQuotasetV2Timeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BlockstorageQuotasetV2Timeouts | IResolvable;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV2.BlockstorageQuotasetV2Timeouts">BlockstorageQuotasetV2Timeouts</a> | cdktf.IResolvable

---




# `blockstorageQuotasetV3` Submodule <a name="`blockstorageQuotasetV3` Submodule" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageQuotasetV3 <a name="BlockstorageQuotasetV3" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3 openstack_blockstorage_quotaset_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageQuotasetV3.BlockstorageQuotasetV3(scope: Construct, id: string, config: BlockstorageQuotasetV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config">BlockstorageQuotasetV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config">BlockstorageQuotasetV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackupGigabytes">resetBackupGigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackups">resetBackups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGigabytes">resetGigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGroups">resetGroups</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetPerVolumeGigabytes">resetPerVolumeGigabytes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetSnapshots">resetSnapshots</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumes">resetVolumes</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumeTypeQuota">resetVolumeTypeQuota</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts"></a>

```typescript
public putTimeouts(value: BlockstorageQuotasetV3Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>

---

##### `resetBackupGigabytes` <a name="resetBackupGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackupGigabytes"></a>

```typescript
public resetBackupGigabytes(): void
```

##### `resetBackups` <a name="resetBackups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetBackups"></a>

```typescript
public resetBackups(): void
```

##### `resetGigabytes` <a name="resetGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGigabytes"></a>

```typescript
public resetGigabytes(): void
```

##### `resetGroups` <a name="resetGroups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetGroups"></a>

```typescript
public resetGroups(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPerVolumeGigabytes` <a name="resetPerVolumeGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetPerVolumeGigabytes"></a>

```typescript
public resetPerVolumeGigabytes(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSnapshots` <a name="resetSnapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetSnapshots"></a>

```typescript
public resetSnapshots(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumes"></a>

```typescript
public resetVolumes(): void
```

##### `resetVolumeTypeQuota` <a name="resetVolumeTypeQuota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.resetVolumeTypeQuota"></a>

```typescript
public resetVolumeTypeQuota(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockstorageQuotasetV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isConstruct"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV3.BlockstorageQuotasetV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformElement"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformResource"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BlockstorageQuotasetV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockstorageQuotasetV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockstorageQuotasetV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockstorageQuotasetV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference">BlockstorageQuotasetV3TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytesInput">backupGigabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupsInput">backupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytesInput">gigabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groupsInput">groupsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytesInput">perVolumeGigabytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshotsInput">snapshotsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumesInput">volumesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuotaInput">volumeTypeQuotaInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytes">backupGigabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backups">backups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytes">gigabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groups">groups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytes">perVolumeGigabytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshots">snapshots</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumes">volumes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuota">volumeTypeQuota</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageQuotasetV3TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference">BlockstorageQuotasetV3TimeoutsOutputReference</a>

---

##### `backupGigabytesInput`<sup>Optional</sup> <a name="backupGigabytesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytesInput"></a>

```typescript
public readonly backupGigabytesInput: number;
```

- *Type:* number

---

##### `backupsInput`<sup>Optional</sup> <a name="backupsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupsInput"></a>

```typescript
public readonly backupsInput: number;
```

- *Type:* number

---

##### `gigabytesInput`<sup>Optional</sup> <a name="gigabytesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytesInput"></a>

```typescript
public readonly gigabytesInput: number;
```

- *Type:* number

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groupsInput"></a>

```typescript
public readonly groupsInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `perVolumeGigabytesInput`<sup>Optional</sup> <a name="perVolumeGigabytesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytesInput"></a>

```typescript
public readonly perVolumeGigabytesInput: number;
```

- *Type:* number

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `snapshotsInput`<sup>Optional</sup> <a name="snapshotsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshotsInput"></a>

```typescript
public readonly snapshotsInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BlockstorageQuotasetV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumesInput"></a>

```typescript
public readonly volumesInput: number;
```

- *Type:* number

---

##### `volumeTypeQuotaInput`<sup>Optional</sup> <a name="volumeTypeQuotaInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuotaInput"></a>

```typescript
public readonly volumeTypeQuotaInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backupGigabytes`<sup>Required</sup> <a name="backupGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backupGigabytes"></a>

```typescript
public readonly backupGigabytes: number;
```

- *Type:* number

---

##### `backups`<sup>Required</sup> <a name="backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.backups"></a>

```typescript
public readonly backups: number;
```

- *Type:* number

---

##### `gigabytes`<sup>Required</sup> <a name="gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.gigabytes"></a>

```typescript
public readonly gigabytes: number;
```

- *Type:* number

---

##### `groups`<sup>Required</sup> <a name="groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.groups"></a>

```typescript
public readonly groups: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `perVolumeGigabytes`<sup>Required</sup> <a name="perVolumeGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.perVolumeGigabytes"></a>

```typescript
public readonly perVolumeGigabytes: number;
```

- *Type:* number

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.snapshots"></a>

```typescript
public readonly snapshots: number;
```

- *Type:* number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumes"></a>

```typescript
public readonly volumes: number;
```

- *Type:* number

---

##### `volumeTypeQuota`<sup>Required</sup> <a name="volumeTypeQuota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.volumeTypeQuota"></a>

```typescript
public readonly volumeTypeQuota: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageQuotasetV3Config <a name="BlockstorageQuotasetV3Config" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.Initializer"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

const blockstorageQuotasetV3Config: blockstorageQuotasetV3.BlockstorageQuotasetV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#project_id BlockstorageQuotasetV3#project_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backupGigabytes">backupGigabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backup_gigabytes BlockstorageQuotasetV3#backup_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backups">backups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backups BlockstorageQuotasetV3#backups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.gigabytes">gigabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#gigabytes BlockstorageQuotasetV3#gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.groups">groups</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#groups BlockstorageQuotasetV3#groups}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#id BlockstorageQuotasetV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.perVolumeGigabytes">perVolumeGigabytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#per_volume_gigabytes BlockstorageQuotasetV3#per_volume_gigabytes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#region BlockstorageQuotasetV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.snapshots">snapshots</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#snapshots BlockstorageQuotasetV3#snapshots}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumes">volumes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volumes BlockstorageQuotasetV3#volumes}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumeTypeQuota">volumeTypeQuota</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volume_type_quota BlockstorageQuotasetV3#volume_type_quota}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#project_id BlockstorageQuotasetV3#project_id}.

---

##### `backupGigabytes`<sup>Optional</sup> <a name="backupGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backupGigabytes"></a>

```typescript
public readonly backupGigabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backup_gigabytes BlockstorageQuotasetV3#backup_gigabytes}.

---

##### `backups`<sup>Optional</sup> <a name="backups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.backups"></a>

```typescript
public readonly backups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#backups BlockstorageQuotasetV3#backups}.

---

##### `gigabytes`<sup>Optional</sup> <a name="gigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.gigabytes"></a>

```typescript
public readonly gigabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#gigabytes BlockstorageQuotasetV3#gigabytes}.

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.groups"></a>

```typescript
public readonly groups: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#groups BlockstorageQuotasetV3#groups}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#id BlockstorageQuotasetV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perVolumeGigabytes`<sup>Optional</sup> <a name="perVolumeGigabytes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.perVolumeGigabytes"></a>

```typescript
public readonly perVolumeGigabytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#per_volume_gigabytes BlockstorageQuotasetV3#per_volume_gigabytes}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#region BlockstorageQuotasetV3#region}.

---

##### `snapshots`<sup>Optional</sup> <a name="snapshots" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.snapshots"></a>

```typescript
public readonly snapshots: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#snapshots BlockstorageQuotasetV3#snapshots}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageQuotasetV3Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#timeouts BlockstorageQuotasetV3#timeouts}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumes"></a>

```typescript
public readonly volumes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volumes BlockstorageQuotasetV3#volumes}.

---

##### `volumeTypeQuota`<sup>Optional</sup> <a name="volumeTypeQuota" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Config.property.volumeTypeQuota"></a>

```typescript
public readonly volumeTypeQuota: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#volume_type_quota BlockstorageQuotasetV3#volume_type_quota}.

---

### BlockstorageQuotasetV3Timeouts <a name="BlockstorageQuotasetV3Timeouts" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.Initializer"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

const blockstorageQuotasetV3Timeouts: blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#create BlockstorageQuotasetV3#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#delete BlockstorageQuotasetV3#delete}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#update BlockstorageQuotasetV3#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#create BlockstorageQuotasetV3#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#delete BlockstorageQuotasetV3#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_quotaset_v3#update BlockstorageQuotasetV3#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageQuotasetV3TimeoutsOutputReference <a name="BlockstorageQuotasetV3TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer"></a>

```typescript
import { blockstorageQuotasetV3 } from '@ithings/cdktf-provider-openstack'

new blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageQuotasetV3Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageQuotasetV3.BlockstorageQuotasetV3Timeouts">BlockstorageQuotasetV3Timeouts</a>

---




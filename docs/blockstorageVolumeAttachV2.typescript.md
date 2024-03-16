# `blockstorageVolumeAttachV2` Submodule <a name="`blockstorageVolumeAttachV2` Submodule" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BlockstorageVolumeAttachV2 <a name="BlockstorageVolumeAttachV2" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2 openstack_blockstorage_volume_attach_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.Initializer"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2(scope: Construct, id: string, config: BlockstorageVolumeAttachV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config">BlockstorageVolumeAttachV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config">BlockstorageVolumeAttachV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetAttachMode">resetAttachMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetDevice">resetDevice</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetInitiator">resetInitiator</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetMultipath">resetMultipath</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetWwnn">resetWwnn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetWwpn">resetWwpn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.putTimeouts"></a>

```typescript
public putTimeouts(value: BlockstorageVolumeAttachV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts">BlockstorageVolumeAttachV2Timeouts</a>

---

##### `resetAttachMode` <a name="resetAttachMode" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetAttachMode"></a>

```typescript
public resetAttachMode(): void
```

##### `resetDevice` <a name="resetDevice" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetDevice"></a>

```typescript
public resetDevice(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitiator` <a name="resetInitiator" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetInitiator"></a>

```typescript
public resetInitiator(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetMultipath` <a name="resetMultipath" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetMultipath"></a>

```typescript
public resetMultipath(): void
```

##### `resetOsType` <a name="resetOsType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetOsType"></a>

```typescript
public resetOsType(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWwnn` <a name="resetWwnn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetWwnn"></a>

```typescript
public resetWwnn(): void
```

##### `resetWwpn` <a name="resetWwpn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.resetWwpn"></a>

```typescript
public resetWwpn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BlockstorageVolumeAttachV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isConstruct"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformElement"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformResource"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.generateConfigForImport"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BlockstorageVolumeAttachV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BlockstorageVolumeAttachV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BlockstorageVolumeAttachV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BlockstorageVolumeAttachV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.data">data</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.driverVolumeType">driverVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.mountPointBase">mountPointBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference">BlockstorageVolumeAttachV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.attachModeInput">attachModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.deviceInput">deviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.initiatorInput">initiatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.multipathInput">multipathInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts">BlockstorageVolumeAttachV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.volumeIdInput">volumeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwnnInput">wwnnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwpnInput">wwpnInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.attachMode">attachMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.initiator">initiator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.multipath">multipath</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.volumeId">volumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwnn">wwnn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwpn">wwpn</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `data`<sup>Required</sup> <a name="data" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.data"></a>

```typescript
public readonly data: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `driverVolumeType`<sup>Required</sup> <a name="driverVolumeType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.driverVolumeType"></a>

```typescript
public readonly driverVolumeType: string;
```

- *Type:* string

---

##### `mountPointBase`<sup>Required</sup> <a name="mountPointBase" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.mountPointBase"></a>

```typescript
public readonly mountPointBase: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageVolumeAttachV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference">BlockstorageVolumeAttachV2TimeoutsOutputReference</a>

---

##### `attachModeInput`<sup>Optional</sup> <a name="attachModeInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.attachModeInput"></a>

```typescript
public readonly attachModeInput: string;
```

- *Type:* string

---

##### `deviceInput`<sup>Optional</sup> <a name="deviceInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.deviceInput"></a>

```typescript
public readonly deviceInput: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initiatorInput`<sup>Optional</sup> <a name="initiatorInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.initiatorInput"></a>

```typescript
public readonly initiatorInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `multipathInput`<sup>Optional</sup> <a name="multipathInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.multipathInput"></a>

```typescript
public readonly multipathInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BlockstorageVolumeAttachV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts">BlockstorageVolumeAttachV2Timeouts</a>

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.volumeIdInput"></a>

```typescript
public readonly volumeIdInput: string;
```

- *Type:* string

---

##### `wwnnInput`<sup>Optional</sup> <a name="wwnnInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwnnInput"></a>

```typescript
public readonly wwnnInput: string;
```

- *Type:* string

---

##### `wwpnInput`<sup>Optional</sup> <a name="wwpnInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwpnInput"></a>

```typescript
public readonly wwpnInput: string[];
```

- *Type:* string[]

---

##### `attachMode`<sup>Required</sup> <a name="attachMode" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.attachMode"></a>

```typescript
public readonly attachMode: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initiator`<sup>Required</sup> <a name="initiator" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.initiator"></a>

```typescript
public readonly initiator: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `multipath`<sup>Required</sup> <a name="multipath" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.multipath"></a>

```typescript
public readonly multipath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `osType`<sup>Required</sup> <a name="osType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

---

##### `wwnn`<sup>Required</sup> <a name="wwnn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwnn"></a>

```typescript
public readonly wwnn: string;
```

- *Type:* string

---

##### `wwpn`<sup>Required</sup> <a name="wwpn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.wwpn"></a>

```typescript
public readonly wwpn: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BlockstorageVolumeAttachV2Config <a name="BlockstorageVolumeAttachV2Config" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.Initializer"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeAttachV2Config: blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.hostName">hostName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#host_name BlockstorageVolumeAttachV2#host_name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.volumeId">volumeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#volume_id BlockstorageVolumeAttachV2#volume_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.attachMode">attachMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#attach_mode BlockstorageVolumeAttachV2#attach_mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.device">device</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#device BlockstorageVolumeAttachV2#device}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#id BlockstorageVolumeAttachV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.initiator">initiator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#initiator BlockstorageVolumeAttachV2#initiator}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#instance_id BlockstorageVolumeAttachV2#instance_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#ip_address BlockstorageVolumeAttachV2#ip_address}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.multipath">multipath</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#multipath BlockstorageVolumeAttachV2#multipath}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#os_type BlockstorageVolumeAttachV2#os_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#platform BlockstorageVolumeAttachV2#platform}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#region BlockstorageVolumeAttachV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts">BlockstorageVolumeAttachV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.wwnn">wwnn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#wwnn BlockstorageVolumeAttachV2#wwnn}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.wwpn">wwpn</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#wwpn BlockstorageVolumeAttachV2#wwpn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#host_name BlockstorageVolumeAttachV2#host_name}.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#volume_id BlockstorageVolumeAttachV2#volume_id}.

---

##### `attachMode`<sup>Optional</sup> <a name="attachMode" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.attachMode"></a>

```typescript
public readonly attachMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#attach_mode BlockstorageVolumeAttachV2#attach_mode}.

---

##### `device`<sup>Optional</sup> <a name="device" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#device BlockstorageVolumeAttachV2#device}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#id BlockstorageVolumeAttachV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initiator`<sup>Optional</sup> <a name="initiator" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.initiator"></a>

```typescript
public readonly initiator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#initiator BlockstorageVolumeAttachV2#initiator}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#instance_id BlockstorageVolumeAttachV2#instance_id}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#ip_address BlockstorageVolumeAttachV2#ip_address}.

---

##### `multipath`<sup>Optional</sup> <a name="multipath" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.multipath"></a>

```typescript
public readonly multipath: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#multipath BlockstorageVolumeAttachV2#multipath}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#os_type BlockstorageVolumeAttachV2#os_type}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#platform BlockstorageVolumeAttachV2#platform}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#region BlockstorageVolumeAttachV2#region}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: BlockstorageVolumeAttachV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts">BlockstorageVolumeAttachV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#timeouts BlockstorageVolumeAttachV2#timeouts}

---

##### `wwnn`<sup>Optional</sup> <a name="wwnn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.wwnn"></a>

```typescript
public readonly wwnn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#wwnn BlockstorageVolumeAttachV2#wwnn}.

---

##### `wwpn`<sup>Optional</sup> <a name="wwpn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Config.property.wwpn"></a>

```typescript
public readonly wwpn: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#wwpn BlockstorageVolumeAttachV2#wwpn}.

---

### BlockstorageVolumeAttachV2Timeouts <a name="BlockstorageVolumeAttachV2Timeouts" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts.Initializer"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

const blockstorageVolumeAttachV2Timeouts: blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#create BlockstorageVolumeAttachV2#create}. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#delete BlockstorageVolumeAttachV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#create BlockstorageVolumeAttachV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/blockstorage_volume_attach_v2#delete BlockstorageVolumeAttachV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BlockstorageVolumeAttachV2TimeoutsOutputReference <a name="BlockstorageVolumeAttachV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { blockstorageVolumeAttachV2 } from '@ithings/cdktf-provider-openstack'

new blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts">BlockstorageVolumeAttachV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BlockstorageVolumeAttachV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.blockstorageVolumeAttachV2.BlockstorageVolumeAttachV2Timeouts">BlockstorageVolumeAttachV2Timeouts</a>

---



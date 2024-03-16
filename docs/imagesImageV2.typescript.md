# `imagesImageV2` Submodule <a name="`imagesImageV2` Submodule" id="@ithings/cdktf-provider-openstack.imagesImageV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagesImageV2 <a name="ImagesImageV2" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2 openstack_images_image_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

new imagesImageV2.ImagesImageV2(scope: Construct, id: string, config: ImagesImageV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config">ImagesImageV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config">ImagesImageV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetDecompress">resetDecompress</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetHidden">resetHidden</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageCachePath">resetImageCachePath</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageId">resetImageId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourcePassword">resetImageSourcePassword</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUrl">resetImageSourceUrl</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUsername">resetImageSourceUsername</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetLocalFilePath">resetLocalFilePath</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinDiskGb">resetMinDiskGb</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinRamMb">resetMinRamMb</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProtected">resetProtected</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVerifyChecksum">resetVerifyChecksum</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVisibility">resetVisibility</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetWebDownload">resetWebDownload</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.putTimeouts"></a>

```typescript
public putTimeouts(value: ImagesImageV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

---

##### `resetDecompress` <a name="resetDecompress" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetDecompress"></a>

```typescript
public resetDecompress(): void
```

##### `resetHidden` <a name="resetHidden" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetHidden"></a>

```typescript
public resetHidden(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageCachePath` <a name="resetImageCachePath" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageCachePath"></a>

```typescript
public resetImageCachePath(): void
```

##### `resetImageId` <a name="resetImageId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageId"></a>

```typescript
public resetImageId(): void
```

##### `resetImageSourcePassword` <a name="resetImageSourcePassword" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourcePassword"></a>

```typescript
public resetImageSourcePassword(): void
```

##### `resetImageSourceUrl` <a name="resetImageSourceUrl" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUrl"></a>

```typescript
public resetImageSourceUrl(): void
```

##### `resetImageSourceUsername` <a name="resetImageSourceUsername" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetImageSourceUsername"></a>

```typescript
public resetImageSourceUsername(): void
```

##### `resetLocalFilePath` <a name="resetLocalFilePath" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetLocalFilePath"></a>

```typescript
public resetLocalFilePath(): void
```

##### `resetMinDiskGb` <a name="resetMinDiskGb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinDiskGb"></a>

```typescript
public resetMinDiskGb(): void
```

##### `resetMinRamMb` <a name="resetMinRamMb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetMinRamMb"></a>

```typescript
public resetMinRamMb(): void
```

##### `resetProperties` <a name="resetProperties" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetProtected` <a name="resetProtected" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetProtected"></a>

```typescript
public resetProtected(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVerifyChecksum` <a name="resetVerifyChecksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVerifyChecksum"></a>

```typescript
public resetVerifyChecksum(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

##### `resetWebDownload` <a name="resetWebDownload" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.resetWebDownload"></a>

```typescript
public resetWebDownload(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ImagesImageV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isConstruct"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

imagesImageV2.ImagesImageV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformElement"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

imagesImageV2.ImagesImageV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformResource"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

imagesImageV2.ImagesImageV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

imagesImageV2.ImagesImageV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ImagesImageV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagesImageV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagesImageV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ImagesImageV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.sizeBytes">sizeBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updateAt">updateAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormatInput">containerFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompressInput">decompressInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormatInput">diskFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hiddenInput">hiddenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePathInput">imageCachePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageIdInput">imageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePasswordInput">imageSourcePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput">imageSourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsernameInput">imageSourceUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePathInput">localFilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGbInput">minDiskGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMbInput">minRamMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protectedInput">protectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksumInput">verifyChecksumInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownloadInput">webDownloadInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormat">containerFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompress">decompress</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormat">diskFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePath">imageCachePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePassword">imageSourcePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrl">imageSourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsername">imageSourceUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePath">localFilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGb">minDiskGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMb">minRamMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksum">verifyChecksum</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownload">webDownload</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `owner`<sup>Required</sup> <a name="owner" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `sizeBytes`<sup>Required</sup> <a name="sizeBytes" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.sizeBytes"></a>

```typescript
public readonly sizeBytes: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeouts"></a>

```typescript
public readonly timeouts: ImagesImageV2TimeoutsOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference">ImagesImageV2TimeoutsOutputReference</a>

---

##### `updateAt`<sup>Required</sup> <a name="updateAt" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updateAt"></a>

```typescript
public readonly updateAt: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `containerFormatInput`<sup>Optional</sup> <a name="containerFormatInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormatInput"></a>

```typescript
public readonly containerFormatInput: string;
```

- *Type:* string

---

##### `decompressInput`<sup>Optional</sup> <a name="decompressInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompressInput"></a>

```typescript
public readonly decompressInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskFormatInput`<sup>Optional</sup> <a name="diskFormatInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormatInput"></a>

```typescript
public readonly diskFormatInput: string;
```

- *Type:* string

---

##### `hiddenInput`<sup>Optional</sup> <a name="hiddenInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hiddenInput"></a>

```typescript
public readonly hiddenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageCachePathInput`<sup>Optional</sup> <a name="imageCachePathInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePathInput"></a>

```typescript
public readonly imageCachePathInput: string;
```

- *Type:* string

---

##### `imageIdInput`<sup>Optional</sup> <a name="imageIdInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageIdInput"></a>

```typescript
public readonly imageIdInput: string;
```

- *Type:* string

---

##### `imageSourcePasswordInput`<sup>Optional</sup> <a name="imageSourcePasswordInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePasswordInput"></a>

```typescript
public readonly imageSourcePasswordInput: string;
```

- *Type:* string

---

##### `imageSourceUrlInput`<sup>Optional</sup> <a name="imageSourceUrlInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrlInput"></a>

```typescript
public readonly imageSourceUrlInput: string;
```

- *Type:* string

---

##### `imageSourceUsernameInput`<sup>Optional</sup> <a name="imageSourceUsernameInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsernameInput"></a>

```typescript
public readonly imageSourceUsernameInput: string;
```

- *Type:* string

---

##### `localFilePathInput`<sup>Optional</sup> <a name="localFilePathInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePathInput"></a>

```typescript
public readonly localFilePathInput: string;
```

- *Type:* string

---

##### `minDiskGbInput`<sup>Optional</sup> <a name="minDiskGbInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGbInput"></a>

```typescript
public readonly minDiskGbInput: number;
```

- *Type:* number

---

##### `minRamMbInput`<sup>Optional</sup> <a name="minRamMbInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMbInput"></a>

```typescript
public readonly minRamMbInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `protectedInput`<sup>Optional</sup> <a name="protectedInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protectedInput"></a>

```typescript
public readonly protectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ImagesImageV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

---

##### `verifyChecksumInput`<sup>Optional</sup> <a name="verifyChecksumInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksumInput"></a>

```typescript
public readonly verifyChecksumInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `webDownloadInput`<sup>Optional</sup> <a name="webDownloadInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownloadInput"></a>

```typescript
public readonly webDownloadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `containerFormat`<sup>Required</sup> <a name="containerFormat" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.containerFormat"></a>

```typescript
public readonly containerFormat: string;
```

- *Type:* string

---

##### `decompress`<sup>Required</sup> <a name="decompress" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.decompress"></a>

```typescript
public readonly decompress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `diskFormat`<sup>Required</sup> <a name="diskFormat" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.diskFormat"></a>

```typescript
public readonly diskFormat: string;
```

- *Type:* string

---

##### `hidden`<sup>Required</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageCachePath`<sup>Required</sup> <a name="imageCachePath" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageCachePath"></a>

```typescript
public readonly imageCachePath: string;
```

- *Type:* string

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageSourcePassword`<sup>Required</sup> <a name="imageSourcePassword" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourcePassword"></a>

```typescript
public readonly imageSourcePassword: string;
```

- *Type:* string

---

##### `imageSourceUrl`<sup>Required</sup> <a name="imageSourceUrl" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUrl"></a>

```typescript
public readonly imageSourceUrl: string;
```

- *Type:* string

---

##### `imageSourceUsername`<sup>Required</sup> <a name="imageSourceUsername" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.imageSourceUsername"></a>

```typescript
public readonly imageSourceUsername: string;
```

- *Type:* string

---

##### `localFilePath`<sup>Required</sup> <a name="localFilePath" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.localFilePath"></a>

```typescript
public readonly localFilePath: string;
```

- *Type:* string

---

##### `minDiskGb`<sup>Required</sup> <a name="minDiskGb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minDiskGb"></a>

```typescript
public readonly minDiskGb: number;
```

- *Type:* number

---

##### `minRamMb`<sup>Required</sup> <a name="minRamMb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.minRamMb"></a>

```typescript
public readonly minRamMb: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `protected`<sup>Required</sup> <a name="protected" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `verifyChecksum`<sup>Required</sup> <a name="verifyChecksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.verifyChecksum"></a>

```typescript
public readonly verifyChecksum: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

##### `webDownload`<sup>Required</sup> <a name="webDownload" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.webDownload"></a>

```typescript
public readonly webDownload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagesImageV2Config <a name="ImagesImageV2Config" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.Initializer"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

const imagesImageV2Config: imagesImageV2.ImagesImageV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.containerFormat">containerFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.diskFormat">diskFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#name ImagesImageV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.decompress">decompress</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#decompress ImagesImageV2#decompress}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.hidden">hidden</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#hidden ImagesImageV2#hidden}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#id ImagesImageV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageCachePath">imageCachePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageId">imageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_id ImagesImageV2#image_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourcePassword">imageSourcePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_password ImagesImageV2#image_source_password}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl">imageSourceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUsername">imageSourceUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_username ImagesImageV2#image_source_username}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.localFilePath">localFilePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minDiskGb">minDiskGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minRamMb">minRamMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#properties ImagesImageV2#properties}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.protected">protected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#protected ImagesImageV2#protected}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#region ImagesImageV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#tags ImagesImageV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.verifyChecksum">verifyChecksum</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#verify_checksum ImagesImageV2#verify_checksum}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.visibility">visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.webDownload">webDownload</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#web_download ImagesImageV2#web_download}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerFormat`<sup>Required</sup> <a name="containerFormat" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.containerFormat"></a>

```typescript
public readonly containerFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#container_format ImagesImageV2#container_format}.

---

##### `diskFormat`<sup>Required</sup> <a name="diskFormat" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.diskFormat"></a>

```typescript
public readonly diskFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#disk_format ImagesImageV2#disk_format}.

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#name ImagesImageV2#name}.

---

##### `decompress`<sup>Optional</sup> <a name="decompress" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.decompress"></a>

```typescript
public readonly decompress: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#decompress ImagesImageV2#decompress}.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.hidden"></a>

```typescript
public readonly hidden: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#hidden ImagesImageV2#hidden}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#id ImagesImageV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageCachePath`<sup>Optional</sup> <a name="imageCachePath" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageCachePath"></a>

```typescript
public readonly imageCachePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_cache_path ImagesImageV2#image_cache_path}.

---

##### `imageId`<sup>Optional</sup> <a name="imageId" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_id ImagesImageV2#image_id}.

---

##### `imageSourcePassword`<sup>Optional</sup> <a name="imageSourcePassword" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourcePassword"></a>

```typescript
public readonly imageSourcePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_password ImagesImageV2#image_source_password}.

---

##### `imageSourceUrl`<sup>Optional</sup> <a name="imageSourceUrl" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUrl"></a>

```typescript
public readonly imageSourceUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_url ImagesImageV2#image_source_url}.

---

##### `imageSourceUsername`<sup>Optional</sup> <a name="imageSourceUsername" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.imageSourceUsername"></a>

```typescript
public readonly imageSourceUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#image_source_username ImagesImageV2#image_source_username}.

---

##### `localFilePath`<sup>Optional</sup> <a name="localFilePath" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.localFilePath"></a>

```typescript
public readonly localFilePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#local_file_path ImagesImageV2#local_file_path}.

---

##### `minDiskGb`<sup>Optional</sup> <a name="minDiskGb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minDiskGb"></a>

```typescript
public readonly minDiskGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_disk_gb ImagesImageV2#min_disk_gb}.

---

##### `minRamMb`<sup>Optional</sup> <a name="minRamMb" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.minRamMb"></a>

```typescript
public readonly minRamMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#min_ram_mb ImagesImageV2#min_ram_mb}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#properties ImagesImageV2#properties}.

---

##### `protected`<sup>Optional</sup> <a name="protected" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.protected"></a>

```typescript
public readonly protected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#protected ImagesImageV2#protected}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#region ImagesImageV2#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#tags ImagesImageV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: ImagesImageV2Timeouts;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#timeouts ImagesImageV2#timeouts}

---

##### `verifyChecksum`<sup>Optional</sup> <a name="verifyChecksum" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.verifyChecksum"></a>

```typescript
public readonly verifyChecksum: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#verify_checksum ImagesImageV2#verify_checksum}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#visibility ImagesImageV2#visibility}.

---

##### `webDownload`<sup>Optional</sup> <a name="webDownload" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Config.property.webDownload"></a>

```typescript
public readonly webDownload: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#web_download ImagesImageV2#web_download}.

---

### ImagesImageV2Timeouts <a name="ImagesImageV2Timeouts" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts.Initializer"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

const imagesImageV2Timeouts: imagesImageV2.ImagesImageV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#create ImagesImageV2#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/images_image_v2#create ImagesImageV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ImagesImageV2TimeoutsOutputReference <a name="ImagesImageV2TimeoutsOutputReference" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { imagesImageV2 } from '@ithings/cdktf-provider-openstack'

new imagesImageV2.ImagesImageV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ImagesImageV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@ithings/cdktf-provider-openstack.imagesImageV2.ImagesImageV2Timeouts">ImagesImageV2Timeouts</a>

---




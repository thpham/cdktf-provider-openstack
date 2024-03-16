# `objectstorageContainerV1` Submodule <a name="`objectstorageContainerV1` Submodule" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObjectstorageContainerV1 <a name="ObjectstorageContainerV1" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1 openstack_objectstorage_container_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

new objectstorageContainerV1.ObjectstorageContainerV1(scope: Construct, id: string, config: ObjectstorageContainerV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config">ObjectstorageContainerV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config">ObjectstorageContainerV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.putVersioningLegacy">putVersioningLegacy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerRead">resetContainerRead</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncKey">resetContainerSyncKey</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncTo">resetContainerSyncTo</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerWrite">resetContainerWrite</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetStoragePolicy">resetStoragePolicy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioningLegacy">resetVersioningLegacy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVersioningLegacy` <a name="putVersioningLegacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.putVersioningLegacy"></a>

```typescript
public putVersioningLegacy(value: ObjectstorageContainerV1VersioningLegacy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.putVersioningLegacy.parameter.value"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

---

##### `resetContainerRead` <a name="resetContainerRead" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerRead"></a>

```typescript
public resetContainerRead(): void
```

##### `resetContainerSyncKey` <a name="resetContainerSyncKey" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncKey"></a>

```typescript
public resetContainerSyncKey(): void
```

##### `resetContainerSyncTo` <a name="resetContainerSyncTo" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerSyncTo"></a>

```typescript
public resetContainerSyncTo(): void
```

##### `resetContainerWrite` <a name="resetContainerWrite" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContainerWrite"></a>

```typescript
public resetContainerWrite(): void
```

##### `resetContentType` <a name="resetContentType" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStoragePolicy` <a name="resetStoragePolicy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetStoragePolicy"></a>

```typescript
public resetStoragePolicy(): void
```

##### `resetVersioning` <a name="resetVersioning" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioning"></a>

```typescript
public resetVersioning(): void
```

##### `resetVersioningLegacy` <a name="resetVersioningLegacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.resetVersioningLegacy"></a>

```typescript
public resetVersioningLegacy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ObjectstorageContainerV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isConstruct"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

objectstorageContainerV1.ObjectstorageContainerV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformElement"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

objectstorageContainerV1.ObjectstorageContainerV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformResource"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

objectstorageContainerV1.ObjectstorageContainerV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ObjectstorageContainerV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObjectstorageContainerV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObjectstorageContainerV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ObjectstorageContainerV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacy">versioningLegacy</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference">ObjectstorageContainerV1VersioningLegacyOutputReference</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerReadInput">containerReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKeyInput">containerSyncKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncToInput">containerSyncToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWriteInput">containerWriteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicyInput">storagePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningInput">versioningInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacyInput">versioningLegacyInput</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerRead">containerRead</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKey">containerSyncKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncTo">containerSyncTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWrite">containerWrite</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicy">storagePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioning">versioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `versioningLegacy`<sup>Required</sup> <a name="versioningLegacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacy"></a>

```typescript
public readonly versioningLegacy: ObjectstorageContainerV1VersioningLegacyOutputReference;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference">ObjectstorageContainerV1VersioningLegacyOutputReference</a>

---

##### `containerReadInput`<sup>Optional</sup> <a name="containerReadInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerReadInput"></a>

```typescript
public readonly containerReadInput: string;
```

- *Type:* string

---

##### `containerSyncKeyInput`<sup>Optional</sup> <a name="containerSyncKeyInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKeyInput"></a>

```typescript
public readonly containerSyncKeyInput: string;
```

- *Type:* string

---

##### `containerSyncToInput`<sup>Optional</sup> <a name="containerSyncToInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncToInput"></a>

```typescript
public readonly containerSyncToInput: string;
```

- *Type:* string

---

##### `containerWriteInput`<sup>Optional</sup> <a name="containerWriteInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWriteInput"></a>

```typescript
public readonly containerWriteInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `storagePolicyInput`<sup>Optional</sup> <a name="storagePolicyInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicyInput"></a>

```typescript
public readonly storagePolicyInput: string;
```

- *Type:* string

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningInput"></a>

```typescript
public readonly versioningInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `versioningLegacyInput`<sup>Optional</sup> <a name="versioningLegacyInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioningLegacyInput"></a>

```typescript
public readonly versioningLegacyInput: ObjectstorageContainerV1VersioningLegacy;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

---

##### `containerRead`<sup>Required</sup> <a name="containerRead" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerRead"></a>

```typescript
public readonly containerRead: string;
```

- *Type:* string

---

##### `containerSyncKey`<sup>Required</sup> <a name="containerSyncKey" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncKey"></a>

```typescript
public readonly containerSyncKey: string;
```

- *Type:* string

---

##### `containerSyncTo`<sup>Required</sup> <a name="containerSyncTo" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerSyncTo"></a>

```typescript
public readonly containerSyncTo: string;
```

- *Type:* string

---

##### `containerWrite`<sup>Required</sup> <a name="containerWrite" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.containerWrite"></a>

```typescript
public readonly containerWrite: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `storagePolicy`<sup>Required</sup> <a name="storagePolicy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.storagePolicy"></a>

```typescript
public readonly storagePolicy: string;
```

- *Type:* string

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.versioning"></a>

```typescript
public readonly versioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObjectstorageContainerV1Config <a name="ObjectstorageContainerV1Config" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.Initializer"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

const objectstorageContainerV1Config: objectstorageContainerV1.ObjectstorageContainerV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#name ObjectstorageContainerV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerRead">containerRead</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_read ObjectstorageContainerV1#container_read}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncKey">containerSyncKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_key ObjectstorageContainerV1#container_sync_key}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncTo">containerSyncTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_to ObjectstorageContainerV1#container_sync_to}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerWrite">containerWrite</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_write ObjectstorageContainerV1#container_write}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#content_type ObjectstorageContainerV1#content_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#force_destroy ObjectstorageContainerV1#force_destroy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#id ObjectstorageContainerV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#metadata ObjectstorageContainerV1#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#region ObjectstorageContainerV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.storagePolicy">storagePolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#storage_policy ObjectstorageContainerV1#storage_policy}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioning">versioning</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning ObjectstorageContainerV1#versioning}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioningLegacy">versioningLegacy</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a></code> | versioning_legacy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#name ObjectstorageContainerV1#name}.

---

##### `containerRead`<sup>Optional</sup> <a name="containerRead" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerRead"></a>

```typescript
public readonly containerRead: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_read ObjectstorageContainerV1#container_read}.

---

##### `containerSyncKey`<sup>Optional</sup> <a name="containerSyncKey" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncKey"></a>

```typescript
public readonly containerSyncKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_key ObjectstorageContainerV1#container_sync_key}.

---

##### `containerSyncTo`<sup>Optional</sup> <a name="containerSyncTo" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerSyncTo"></a>

```typescript
public readonly containerSyncTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_sync_to ObjectstorageContainerV1#container_sync_to}.

---

##### `containerWrite`<sup>Optional</sup> <a name="containerWrite" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.containerWrite"></a>

```typescript
public readonly containerWrite: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#container_write ObjectstorageContainerV1#container_write}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#content_type ObjectstorageContainerV1#content_type}.

---

##### `forceDestroy`<sup>Optional</sup> <a name="forceDestroy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#force_destroy ObjectstorageContainerV1#force_destroy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#id ObjectstorageContainerV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#metadata ObjectstorageContainerV1#metadata}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#region ObjectstorageContainerV1#region}.

---

##### `storagePolicy`<sup>Optional</sup> <a name="storagePolicy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.storagePolicy"></a>

```typescript
public readonly storagePolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#storage_policy ObjectstorageContainerV1#storage_policy}.

---

##### `versioning`<sup>Optional</sup> <a name="versioning" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioning"></a>

```typescript
public readonly versioning: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning ObjectstorageContainerV1#versioning}.

---

##### `versioningLegacy`<sup>Optional</sup> <a name="versioningLegacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1Config.property.versioningLegacy"></a>

```typescript
public readonly versioningLegacy: ObjectstorageContainerV1VersioningLegacy;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

versioning_legacy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#versioning_legacy ObjectstorageContainerV1#versioning_legacy}

---

### ObjectstorageContainerV1VersioningLegacy <a name="ObjectstorageContainerV1VersioningLegacy" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.Initializer"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

const objectstorageContainerV1VersioningLegacy: objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#location ObjectstorageContainerV1#location}. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#type ObjectstorageContainerV1#type}. |

---

##### `location`<sup>Required</sup> <a name="location" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#location ObjectstorageContainerV1#location}.

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/resources/objectstorage_container_v1#type ObjectstorageContainerV1#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObjectstorageContainerV1VersioningLegacyOutputReference <a name="ObjectstorageContainerV1VersioningLegacyOutputReference" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer"></a>

```typescript
import { objectstorageContainerV1 } from '@ithings/cdktf-provider-openstack'

new objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ObjectstorageContainerV1VersioningLegacy;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.objectstorageContainerV1.ObjectstorageContainerV1VersioningLegacy">ObjectstorageContainerV1VersioningLegacy</a>

---



